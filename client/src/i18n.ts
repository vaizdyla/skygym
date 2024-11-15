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
        titleHome: 'Sporto klubas Vilniuje – lankymo valandos NERIBOJAMOS!',
        titleContacts: 'Kontaktai',
        footerCopy: 'Sporto klubas Vilniuje. Visos teisės ginamos.',
      },
    },
    en: {
      translation: {
        titleHome: 'Home',
        titleContacts: 'Contacts',
        footerCopy: 'Gym in Vilnius. All rights reserved.',
      },
    },
    ru: {
      translation: {
        titleHome: 'Glavnaja',
        titleContacts: 'Kontakty',
        footerCopy: 'Sporto klubas Vilniuje. Visos teisės ginamos.',
      },
    },
  },
});

export default i18n;
