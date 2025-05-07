"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Footer = ({ show, handleSubmit }) => {
  const { cart } = useContext(CartContext);

  const itemN = cart.reduce((sum, item) => sum + item.amount, 0);

  const total = cart
    .reduce((acc, currentValue) => {
      let price = 0;
      if (currentValue.modifiers) {
        price =
          currentValue.modifiers.reduce(
            (acc, curr) => acc + Number(curr.price),
            0
          ) + Number(currentValue.price);
      } else {
        price = Number(currentValue.price);
      }
      return acc + currentValue.amount * price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <AnimatePresence>
        {show && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-10/12 bg-[#1C305E] p-4 h-19 shadow-[0px_0px_64px_0px_#E7EAF3] flex gap-5 justify-between items-center rounded-[40px] px-8"
          >
            <div className="flex flex-row gap-5">
              <button
                className="text-[#1C305E] bg-[#FBB14A] px-4 py-2 rounded-[100px] text-xl flex flex-row gap-2"
                onClick={handleSubmit}
              >
                <div className="flex flex-row justify-center items-center relative gap-2">
                  Submit
                  <div className="ml-1 w-7 h-7 top-[-12px] bg-[#1C305E] right-[-14px] text-[18px] text-[#FBB14A] rounded-full flex justify-center items-center">
                    {itemN}
                  </div>
                </div>
              </button>
            </div>

            <h1 className="text-white px-1 py-3 rounded-[100px] text-xl flex flex-row gap-5 font-bold">
              Total ₾{total}
            </h1>
          </Motion.div>
        )}
      </AnimatePresence>

      {show && <div className="h-25 w-full" />}
    </>
  );
};

export default Footer;
