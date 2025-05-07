import { useEffect, useState, useMemo } from "react";
import CustomPastaType from "./CustomPastaType";
import CustomPastaSauce from "./CustomPastaSauce";
import CustomPastaIngredients from "./CustomPastaIngredients";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import pastaSauce from "@/data/sauce";
import pastaIngredients from "@/data/additional-ingrediets";
const CustomPasta = ({ setCreatingCustom }) => {
  const [selectedPastaType, setSelectedPastaType] = useState();
  const [selectedPastaSauce, setSelectedPastaSauce] = useState();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  const total =
    selectedPastaType?.price +
    selectedPastaSauce?.price +
    selectedIngredients?.reduce((acc, item) => acc + item.price, 0);

  const handleAddToCart = () => {
    const modifiers = [selectedPastaSauce, ...selectedIngredients].map(
      (item) => ({
        amount: 1,
        price: item.price,
        productId: item.productId,
      })
    );

    setCart([
      ...cart,
      {
        amount: 1,
        comment: "",
        modifiers: modifiers,
        price: 4.0,
        productId: selectedPastaType.productId,
        type: "Product",
        custom: true,
        customOrderId: Date.now(),
      },
    ]);
    setCreatingCustom(false);
  };

  const filteredSauces = useMemo(
    () =>
      Object.keys(pastaSauce)
        .filter((item) =>
          pastaSauce[item].forPasta?.includes(selectedPastaType?.productId)
        )
        .map((item) => pastaSauce[item]),
    [selectedPastaType]
  );

  const filteredIngredients = useMemo(
    () =>
      Object.keys(pastaIngredients)
        .filter((item) =>
          pastaIngredients[item].combos?.[
            selectedPastaType?.productId
          ]?.includes(selectedPastaSauce?.productId)
        )
        .map((item) => pastaIngredients[item]),
    [selectedPastaType, selectedPastaSauce]
  );

  useEffect(() => {
    // Clear pasta sauce state if selected pasta type (changed) does not have that sauce option
    setSelectedPastaSauce((prev) => {
      const shouldClear = !filteredSauces.find(
        ({ productId }) => productId === selectedPastaSauce?.productId
      );
      return shouldClear ? null : prev;
    });
    setSelectedIngredients((prev) => {
      return prev.filter((selectedIngredient) =>
        filteredIngredients.some(
          (ingredient) => ingredient.productId === selectedIngredient.productId
        )
      );
    });
  }, [
    selectedPastaType,
    selectedPastaSauce,
    filteredSauces,
    filteredIngredients,
  ]);

  return (
    <div className="bg-white w-screen min-h-screen text-black p-15 gap-10 flex flex-col">
      <CustomPastaType
        value={selectedPastaType}
        setValue={setSelectedPastaType}
      />
      {selectedPastaType && (
        <CustomPastaSauce
          options={filteredSauces}
          value={selectedPastaSauce}
          setValue={setSelectedPastaSauce}
        />
      )}
      {selectedPastaSauce && (
        <CustomPastaIngredients
          options={filteredIngredients}
          value={selectedIngredients}
          setValue={setSelectedIngredients}
        />
      )}
      {selectedPastaSauce && (
        <div className="flex gap-10 text-2xl items-center">
          <button
            className="text-white bg-[#1C305E] px-4 py-2 rounded-[100px] text-2xl w-60"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>

          <h1 className="text-[#1C305E]">Total ₾{total.toFixed(2) ?? 0}</h1>
        </div>
      )}
    </div>
  );
};

export default CustomPasta;
