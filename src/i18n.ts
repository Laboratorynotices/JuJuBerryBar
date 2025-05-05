import { createI18n } from "vue-i18n";
import de from "./locales/de.json";
import ru from "./locales/ru.json";

const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "de",
  messages: {
    de,
    ru,
  },
});

export default i18n;
