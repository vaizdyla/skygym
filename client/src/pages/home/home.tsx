import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main className="container mx-auto px-10">
      <h1 className="text-3xl text-center">{t('titleHome')}</h1>
      <span>Prašome pasirinkti kalbą!</span>
    </main>
  );
};
