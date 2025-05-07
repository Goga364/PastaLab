import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/common.json";
import ge from "../locales/ge/common.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ge: { translation: ge },
  },
  lng: "ge",
  fallbackLng: "ge",
  interpolation: {
    escapeValue: true,
  },
});

export default i18next;
