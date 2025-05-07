import pastaType from "./pasta-type";
import pastaSauce from "./sauce";
import olives from "../assets/ingredients/zetis_xili.png";
import capers from "../assets/ingredients/kapersi.png";
import cherry from "../assets/ingredients/cheri_pomidori.png";
import parmaHam from "../assets/ingredients/parmahemi.png";
import stracciatella from "../assets/ingredients/strachatela.png";
import parmesan from "../assets/ingredients/parmezani.png";
import roastedCherry from "../assets/ingredients/mobrawuli_cheri.png";
import basil from "../assets/ingredients/baziliki.png";
import bacon from "../assets/ingredients/bacon.png";
import mushroom from "../assets/ingredients/soko.png";
import nagebi from "../assets/ingredients/nagebi.png";

const pastaIngredients = {
  olive: {
    price: 1.45,
    name: "zetis xili",
    productId: "05f09346-08da-4e35-9dc2-a219dffe1350",
    image: olives,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
    },
  },
  nagebi: {
    price: 2.45,
    name: "nagebi",
    productId: "7f84182b-ad22-49f7-99da-8ecfac1f1bc3",
    image: nagebi,
    combos: {
      [pastaType.tagliatelle.productId]: [
        pastaSauce.bolognese.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.bolognese.productId, 
      ],
    },
  },
  capers: {
    name: "kapersi",
    productId: "d27a2064-ab60-4536-a23a-c010200dcb54",
    price: 1.45,
    image: capers,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.cacioPepe.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
    },
  },
  driedTomato: {
    name: "pomidvris chiri",
    productId: "871ddf19-03bb-4e49-8239-2632a9695cde",
    price: 1.45,
    image: cherry,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.bolognese.productId,
        pastaSauce.seafood.productId,
      ],
    },
  },
  parmaHam: {
    name: "parmahemi",
    productId: "ba81e6ff-12f8-4fc8-ad87-f83b95ed3d31",
    price: 6.45,
    image: parmaHam,
    combos: {
      [pastaType.rigatoni.productId]: [pastaSauce.pesto.productId],
      [pastaType.penne.productId]: [pastaSauce.pesto.productId],
      [pastaType.tagliatelle.productId]: [pastaSauce.pesto.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.pesto.productId],
    },
  },
  stracciatella: {
    name: "strachatela",
    productId: "a6e571e1-debb-43a2-8118-d016a3bd229d",
    price: 5.45,
    image: stracciatella,
    combos: {
      [pastaType.rigatoni.productId]: [pastaSauce.pesto.productId, pastaSauce.alPomodoro.productId],
      [pastaType.penne.productId]: [pastaSauce.pesto.productId, pastaSauce.alPomodoro],
      [pastaType.tagliatelle.productId]: [pastaSauce.pesto.productId, pastaSauce.alPomodoro.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.pesto.productId, pastaSauce.alPomodoro.productId],
    },
  },
  parmesan: {
    name: "parmazeni",
    productId: "56fd67e3-522c-4fde-a210-43226454c0f1",
    price: 3.95,
    image: parmesan,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.bolognese.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.pesto.productId,
        pastaSauce.alPomodoro.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.bolognese.productId,
      ],
    },
  },
  roastedCherry: {
    name: "shemtsvari cheri",
    productId: "5d9c0c1f-677e-471e-b7af-00e2a76a1f22",
    price: 2.95,
    image: roastedCherry,
    combos: {
      [pastaType.rigatoni.productId]: [pastaSauce.pesto.productId],
      [pastaType.penne.productId]: [pastaSauce.pesto.productId],
      [pastaType.tagliatelle.productId]: [pastaSauce.pesto.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.pesto.productId],
    },
  },
  basil: {
    name: "baziliki",
    productId: "20e20922-ceb3-48bd-8a7a-96d809754201",
    price: 2.45,
    image: basil,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.cacioPepe.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.cacioPepe.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.cacioPepe.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.cacioPepe.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
    },
  },
  bacon: {
    name: "bekoni",
    productId: "81042a6d-e619-41d0-a7ad-2ee8c9ccb80b",
    price: 6.45,
    image: bacon,
    combos: {
      [pastaType.rigatoni.productId]: [
        pastaSauce.alPomodoro.productId,
        pastaSauce.blueCheese.productId,
        pastaSauce.carbonara.productId,
      ],
      [pastaType.penne.productId]: [
        pastaSauce.alPomodoro.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.tagliatelle.productId]: [
        pastaSauce.alPomodoro.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
      ],
      [pastaType.spaghetti.productId]: [
        pastaSauce.alPomodoro.productId,
        pastaSauce.carbonara.productId,
        pastaSauce.mushroomTruffle.productId,
        pastaSauce.blueCheese.productId,
      ],
    },
  },
  blueCheese: {
    name: "bluchiz",
    productId: "ac1ed2f9-a7b0-4a86-98ff-40ee0e2dc0cb",
    price: 3.95,
    image: parmesan,
    combos: {
      [pastaType.rigatoni.productId]: [pastaSauce.alPomodoro.productId],
      [pastaType.penne.productId]: [pastaSauce.alPomodoro.productId],
      [pastaType.tagliatelle.productId]: [pastaSauce.alPomodoro.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.alPomodoro.productId],
    },
  },
  pecorino: {
    name: "pekorino",
    productId: "d9b14f81-c23c-4855-9a6f-67341c0d8145",
    price: 3.95,
    image: cherry,
    combos: {
      [pastaType.rigatoni.productId]: [pastaSauce.carbonara.productId],
      [pastaType.penne.productId]: [pastaSauce.carbonara.productId],
      [pastaType.tagliatelle.productId]: [pastaSauce.carbonara.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.carbonara.productId],
    },
  },
  doubleMushroom: {
    name: "soko (2x)",
    productId: "2765ecea-873b-4381-a84a-43d5b251f56f",
    price: 2.95,
    image: mushroom,
    combos: {
      [pastaType.penne.productId]: [pastaSauce.mushroomTruffle.productId],
      [pastaType.tagliatelle.productId]: [pastaSauce.mushroomTruffle.productId],
      [pastaType.spaghetti.productId]: [pastaSauce.mushroomTruffle.productId],
    },
  },
};

export default pastaIngredients;
