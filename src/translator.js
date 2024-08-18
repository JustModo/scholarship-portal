import { useContext, useEffect, useMemo, useState } from "react";
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
      kn: KNtranslation,
    }),
    []
  );

  const [translation, setTranslation] = useState(resources[language]);

  useEffect(() => {
    setTranslation(resources[language]);
  }, [language, resources]);

  const t = (text) => {
    if (!translation) return text;
    if (prefix) return translation[prefix]?.[text] || text;
    return translation[text] || text;
  };

  return { t };
}

export default useTranslator;
