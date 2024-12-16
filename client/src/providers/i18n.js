import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            appName: "MrLister App",
            date: "Today is {{date, DATE_SHORT}}",
          },
          itemList: {
            notResolvedOnly: "not resolved only",
            allItems: "all items",
            counter_zero: "No items to show",
            counter_one: "Only one item to show",
            counter_other: "Showing {{count}} items",
          },
          errors: {
            noCode: "Something's gone wrong.",
            toDoListNotFound: "ToDoList does not exist.",
            failedToLoadList: "Failed to load overview!",
          },
        },
      },
      cs: {
        translation: {
          header: {
            appName: "Aplikace MrLister",
            date: "Dnes je {{date, DATE_SHORT}}",
          },
          itemList: {
            notResolvedOnly: "pouze nevyřešené",
            allItems: "všechny položky",
            counter_zero: "Žádná položka k zobrazení",
            counter_one: "Zobrazuji pouze jednu položku",
            counter_few: "Zobrazuji {{count}} položky",
            counter_other: "Zobrazuji {{count}} položek",
          },
          errors: {
            noCode: "Něco se nepovedlo.",
            toDoListNotFound: "ToDoList neexistuje.",
            failedToLoadList: "Nepodařilo se načíst přehled úkolovníků!",
          },
        },
      },
    },
  });

i18n.services.formatter.add("DATE_SHORT", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_SHORT);
});

i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
