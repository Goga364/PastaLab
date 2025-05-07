import { useTranslation } from "react-i18next";
import logoImage from "../assets/pasta_lab_bg.png";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { motion } from "framer-motion";
const OrderType = ({ setOrderType }) => {
  const { t } = useTranslation();
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div className="bg-[#1C305E] w-full h-full flex justify-center flex-col items-center gap-28">
      <Image src={logoImage} alt="Logo" className="max-w-[800px]" />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex gap-8 text-[#1C305E] text-2xl">
          <button
            className="bg-[#FBB14A] text-3xl px-10 h-[80px] rounded-2xl"
            onClick={() => setOrderType("dineIn")}
          >
            {t("startOrder")}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderType;
