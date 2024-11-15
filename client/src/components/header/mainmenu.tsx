import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../../constants/languages';
import { useTranslation } from 'react-i18next';

export const MainMenu = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <nav className="flex justify-between px-5">
      <div>
        <NavLink to="/">{t('titleHome')}</NavLink>
        <NavLink to="/kontaktai">{t('titleContacts')}</NavLink>
      </div>
      <div>
        <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};
