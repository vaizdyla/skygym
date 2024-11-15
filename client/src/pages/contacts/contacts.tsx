import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1 className="text-3xl">{t('titleContacts')}</h1>
    </main>
  );
};
