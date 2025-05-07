import UKFlag from "../assets/flags/en";
import GEOFlag from "../assets/flags/ge";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ge" : "en");
  };

  return (
    <button className="absolute right-5 top-5 " onClick={handleClick}>
      {i18n.language === "en" ? <UKFlag /> : <GEOFlag />}
    </button>
  );
};

export default LanguageSwitcher;
