import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'lt',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    lt: {
      translation: {
        titleHome: 'Pradžia',
        titlePricelist: 'Kainos',
        titleToc: 'Taisyklės',
        titleContacts: 'Kontaktai',
        footerCopy: 'Sporto klubas Vilniuje. Visos teisės ginamos.',
      },
    },
    en: {
      translation: {
        titleHome: 'Home',
        titlePricelist: 'Pricelist',
        titleToc: 'TOC',
        titleContacts: 'Contacts',
        footerCopy: 'Gym in Vilnius. All rights reserved.',
      },
    },
    ru: {
      translation: {
        titleHome: 'Главная',
        titlePricelist: 'Цены',
        titleToc: 'Правила',
        titleContacts: 'Контакты',
        footerCopy: 'Спортзал в Вильнюсе. Все права сохранены.',
      },
    },
  },
});

export default i18n;
