import { getSession } from "next-auth/react";
import { useState } from "react";
import OrderType from "@/screens/OrderType";
import ChooseOrder from "@/screens/ChooseOrder";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import successAnimation from "../assets/animations/successAnimation.json";
import handleOrder from "@/utils/handleOrder";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomPasta from "@/screens/CustomPasta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "@/components/BackButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [orderType, setOrderType] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [creatingCustom, setCreatingCustom] = useState(false);

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  };
  const { cart } = useContext(CartContext);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const startTime = Date.now();
    try {
      await handleOrder(cart);
    } catch (err) {
      console.error("Order failed", err);
      setIsSubmitting(false);
    }
    const elapsed = Date.now() - startTime;
    const remainingTime = 2500 - elapsed;
    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }
    setIsSubmitting(false);
    setOrderType(null);
  };

  const prevStep = () => {
    if (creatingCustom) return setCreatingCustom(false);
    setOrderType(null);
  };

  const renderContent = () => {
    if (!orderType) {
      return <OrderType setOrderType={setOrderType} />;
    }

    if (creatingCustom) {
      return (
        <>
          <BackButton onClick={prevStep} />
          <CustomPasta setCreatingCustom={setCreatingCustom} />
        </>
      );
    }

    return (
      <>
        <BackButton onClick={prevStep} />
        <ChooseOrder setCreatingCustom={setCreatingCustom} />
      </>
    );
  };

  if (isSubmitting) {
    return (
      <div className="w-dvw h-dvh  bg-[#1C305E] flex justify-center items-center flex-col">
        <div className="w-[500px] h-[600px]">
          <Lottie animationData={successAnimation} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-dvh h-dvh relative"
      style={{ height: "100vh", width: "100vw" }}
    >
      <button onClick={enterFullScreen} className="absolute left-0 h-10 w-10" />
      <LanguageSwitcher />
      {renderContent()}
      <Footer
        show={orderType && cart.length && !creatingCustom}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     // Redirect to login page if not authenticated
//     return {
//       redirect: {
//         destination: "/login", // Customize this to your login page URL
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user: session?.user || null },
//   };
// }
