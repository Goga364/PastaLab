import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import PriceTag from "./PriceTag";
import QuantityChanger from "./QuantityChanger";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

const ProductCard = ({ items, setCreatingCustom, title, hideDescription }) => {
  const { cart, setCart } = useContext(CartContext);
  const { t } = useTranslation();
  const setQuantity = (id, n) => {
    if (n <= 0) {
      setCart((prev) => prev.filter((item) => item.productId !== id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.productId === id ? { ...item, amount: n } : item
        )
      );
    }
  };

  const handleClick = (item) => {
    if (!item.productId) return setCreatingCustom(true);

    const cartItem = cart.find(
      (cartItem) => cartItem.productId === item.productId
    );

    if (cartItem) return setQuantity(item.productId, cartItem.amount + 1);

    setCart((prev) => [
      ...prev,
      {
        amount: 1,
        comment: "",
        price: item.price,
        productId: item.productId,
        type: "Product",
      },
    ]);
  };
  return (
    <div className="flex gap-10 flex-col">
      <h1 className="py-4 text-start text-5xl">{title}</h1>
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {items?.map((product) => {
          let quantity;

          if (product.productId === "") {
            const amount = cart.filter((item) => item.custom).length;
            quantity = amount;
          } else {
            quantity = cart.find(
              (item) => item.productId === product.productId
            )?.amount;
          }
          return (
            <AnimationWrapper>
              <div
                key={product.productId}
                className={`px-3 pb-3  w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  quantity ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() => handleClick(product)}
              >
                <Image
                  alt="product"
                  src={product.image}
                  className="w-40 h-40 object-contain pt-2.5  shrink-0"
                />

                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{t(product.name)}</h1>
                  {!hideDescription && (
                    <div className="mt-2 pb-4 text-sm text-[#808080]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </div>
                  )}
                  <PriceTag price={product.price} />
                  <QuantityChanger
                    setQuantity={setQuantity}
                    currentQuantity={quantity}
                    productId={product.productId}
                  />
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
