import "../../lib/i18n.js";
import "@/styles/globals.css";
import "./App.css";
import { CartContextProvider } from "@/context/CartContextProvider";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default appWithTranslation(App);
