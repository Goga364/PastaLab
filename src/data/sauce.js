import pastaType from "./pasta-type";
import pesto from "../assets/sauces/pesto.png";
import cacioPepe from "../assets/sauces/kachio_pepe.png";
import alPomodoro from "../assets/sauces/al_pomidoro.png";
import carbonara from "../assets/sauces/carbonara.png";
import blueCheese from "../assets/sauces/lurji_kveli.png";
import mushroomTruffle from "../assets/sauces/soko.png";
import boloneze from "../assets/sauces/boloneze.png";
import seaFood from "../assets/sauces/zgvis_produqtebis.png";

const pastaSauce = {
  pesto: {
    productId: "05271bb0-c018-4b5b-83c7-cef18eaebe2a",
    name: "pesto sauce",
    price: 11.95,
    image: pesto,
    forPasta: [
      pastaType.rigatoni.productId,
      pastaType.penne.productId,
      pastaType.tagliatelle.productId,
      pastaType.spaghetti.productId,
    ],
  },
  cacioPepe: {
    productId: "06040f59-9d1e-47c4-8621-922b21bbfa64",
    name: "kachio pepe",
    price: 12.95,
    image: cacioPepe,
    forPasta: [
      pastaType.rigatoni.productId,
      pastaType.penne.productId,
      pastaType.tagliatelle.productId,
      pastaType.spaghetti.productId,
    ],
  },
  alPomodoro: {
    productId: "85bc1b75-13c5-4d2d-aa23-4c2d635ff159",
    name: "alpomidoro",
    price: 10.95,
    image: alPomodoro,
    forPasta: [
      pastaType.rigatoni.productId,
      pastaType.penne.productId,
      pastaType.tagliatelle.productId,
      pastaType.spaghetti.productId,
    ],
  },
  carbonara: {
    productId: "8ec88c04-ee00-4a6a-8c9c-a4acedf4e0b7",
    name: "carbonara",
    price: 11.95,
    image: carbonara,
    forPasta: [
      pastaType.rigatoni.productId,
      pastaType.penne.productId,
      pastaType.tagliatelle.productId,
      pastaType.spaghetti.productId,
    ],
  },
  blueCheese: {
    productId: "ec63ff7c-9059-4faf-94a5-14d750193447",
    name: "lurji kveli",
    price: 12.45,
    // TODO: blue cheese sauce
    image: blueCheese,
    forPasta: [
      pastaType.rigatoni.productId,
      pastaType.penne.productId,
      pastaType.tagliatelle.productId,
      pastaType.spaghetti.productId,
    ],
  },
  mushroomTruffle: {
    productId: "2611f301-c91c-41fb-b3d2-0588e1f346c0",
    name: "tirufelis sousi",
    price: 14.95,
    image: mushroomTruffle,
    forPasta: [pastaType.penne.productId, pastaType.tagliatelle.productId, pastaType.spaghetti.productId],
  },
  bolognese: {
    productId: "8d5998a8-834c-46a4-9c8c-0e30c6f76936",
    name: "boloneze sousi",
    price: 14.45,
    image: boloneze,
    forPasta: [pastaType.tagliatelle.productId, pastaType.spaghetti.productId],
  },
  seafood: {
    productId: "3a6582d2-ff98-454f-ba7c-8ce2fc9aa026",
    name: "zgvisproduktebi",
    price: 22.45,
    image: seaFood,
    forPasta: [pastaType.tagliatelle.productId, pastaType.spaghetti.productId],
  },
};

export default pastaSauce;
