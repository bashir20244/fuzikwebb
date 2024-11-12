import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json"; 
import translationAR from "../../locales/ar/translation.json"; 
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense: false 
    }
  });


i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
});

export default i18n;
