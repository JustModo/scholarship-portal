import { useContext, useMemo } from "react";
import { GlobalStateContext } from "./context/GlobalContext";
import ENtranslation from "./locales/en/translations.json";
import HItranslation from "./locales/hi/translations.json";
import KNtranslation from "./locales/kn/translations.json";

function useTranslator(prefix = "") {
  const { language } = useContext(GlobalStateContext);

  const resources = useMemo(
    () => ({
      en: ENtranslation,
      hi: HItranslation,
      // kn: KNtranslation,
    }),
    []
  );

  const t = (text) => {
    const translation = resources[language];
    if (!translation) return text;
    if (prefix)
      return (
        prefix.split(".").reduce((acc, part) => {
          return acc[part];
        }, translation)[text] || text
      );
    return translation[text] || text;
  };

  return t;
}

export default useTranslator;
