import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      topBar: {
        createListButton: "Create new list",
      },
    },
  },
  cs: {
    translation: {
      topBar: {
        createListButton: "Vytvořit nový seznam",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

console.log("i18n initialized with language:", i18n.language);

export default i18n;
