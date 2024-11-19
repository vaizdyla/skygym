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
            <div className="flex items-center space-x-2 uppercase font-semibold text-xl">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'border border-slate-600 py-1 px-2 rounded-lg bg-slate-800'
                    : 'hover:text-slate-100 border border-slate-900 hover:border-slate-600 rounded-lg py-1 px-2'
                }
                to="/"
              >
                {t('titleHome')}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'border border-slate-600 py-1 px-2 rounded-lg bg-slate-800'
                    : 'hover:text-slate-100 border border-slate-900 hover:border-slate-600 rounded-lg py-1 px-2'
                }
                to="kainos"
              >
                {t('titlePricelist')}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'border border-slate-600 py-1 px-2 rounded-lg bg-slate-800'
                    : 'hover:text-slate-100 border border-slate-900 hover:border-slate-600 rounded-lg py-1 px-2'
                }
                to="taisykles"
              >
                {t('titleToc')}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'border border-slate-600 py-1 px-2 rounded-lg bg-slate-800'
                    : 'hover:text-slate-100 border border-slate-900 hover:border-slate-600 rounded-lg py-1 px-2'
                }
                to="kontaktai"
              >
                {t('titleContacts')}
              </NavLink>
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
    </nav>
  );
};
