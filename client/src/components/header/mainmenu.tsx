import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../../constants/languages';
import { useTranslation } from 'react-i18next';
import logo from '/assets/skygym-logo-88.png';
import { FaRegCircleUser } from 'react-icons/fa6';

export const MainMenu = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <nav className="">
      <div className="container px-10 mx-auto text-slate-300">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/** logo */}
            <div>
              <a href="/">
                <img
                  className="h-16 my-3"
                  src={logo}
                  alt="SkyGym logo header"
                />
              </a>
            </div>
            {/** primary nav */}
            <div className="flex items-center space-x-3">
              <NavLink to="/">{t('titleHome')}</NavLink>
              <NavLink to="/kontaktai">{t('titleContacts')}</NavLink>
            </div>
          </div>
          {/** secondary nav */}
          <div className="flex items-center gap-3">
            <FaRegCircleUser size={30} />
            <select defaultValue={i18n.language} onChange={onChangeLang}>
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/** mobile menu */}
      {/* <div>
        
      </div>
      <div>
        
      </div> */}
    </nav>
  );
};
