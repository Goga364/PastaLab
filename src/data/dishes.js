import customDish from "../assets/dishes/custom.png";
import boloneze from "../assets/dishes/boloneze.png";
import nioki from "../assets/dishes/nioki.png";
import rigatoniPesto from "../assets/dishes/rigatoni_pesto.png";
import carbonara from "../assets/dishes/karbonara.png";
import seaFood from "../assets/dishes/zgvis_produqtebis.png";
import alPomodoro from "../assets/dishes/al_pomidoro.png";
import mushroomTruffle from "../assets/dishes/sokos_pasta.png";
import blueCheese from "../assets/dishes/lurji_yvelis_pasta.png";
import niokiPesto from "../assets/dishes/niokis_pesto.png";
import cacioPepe from "../assets/dishes/kachio_pepe.png";
import karbonara_kimchis_sousit from "../assets/dishes/karbonara_kimchis_sousit.png";

const dishes = [
  {
    name: "shenipasta",
    productId: "",
    price: null,
    image: customDish,
  },
  {
    productId: "c61419c7-686a-473c-a162-ac85ee7f6f9d",
    name: "boloneze",
    price: 26.30,
    image: boloneze,
  },
  {
    productId: "ca6bcca4-9ee8-444c-8646-880ac13e3edf",
    name: "nioki",
    price: 25.90,
    image: nioki,
  },
  {
    productId: "9a681600-b84f-4bbc-8093-7d64e53f2720",
    name: "pestos pasta strachatelit",
    price: 23.85,
    image: rigatoniPesto,
  },
  {
    productId: "0b2a467b-25dd-4002-a6a2-14e66c5d1b88",
    name: "karbonara",
    img: "karbonara",
    price: 26.85,
    image: carbonara,
  },

  // {
  //   productId: "",
  //   name: "karbonara kimchis sousit",
  //   price: 20.90,
  //   image: karbonara_kimchis_sousit,
  // },

  {
    productId: "b36a7f74-c08c-492a-8e59-db2eb960085a",
    name: "zgvis pasta",
    price: 27.90,
    image: seaFood,
  },
  {
    productId: "efa6e618-5d34-4059-b820-2de9740a083d",
    name: "al pomidoro",
    price: 25.35,
    image: alPomodoro,
  },
  {
    productId: "08c41f98-7e16-49b3-b946-93c86127a096",
    name: "sokos pasta",
    price: 24.35,
    image: mushroomTruffle,
  },
  {
    productId: "a5630ec6-7d8e-4ca3-8ed2-0126f8799fe5",
    name: "blue cheese",
    price: 24.35,
    image: blueCheese,
  },
  {
    productId: "759fb5b4-3014-4e74-a4ee-4528d21a851a",
    name: "nioki pesto strachateli",
    price: 26.90,
    image: niokiPesto,
  },
  {
    productId: "9e42ed40-be6e-4177-8601-ed5bcef7f909",
    name: "kachio",
    price: 20.90,
    image: cacioPepe,
  },


];

export default dishes;
