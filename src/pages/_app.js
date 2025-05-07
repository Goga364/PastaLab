import "@/styles/globals.css";
import "../../lib/i18n.js";
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
