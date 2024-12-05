import { useTranslation } from 'react-i18next';
import { MAININFO } from '../../constants/maininfo';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Gallery } from '../shared/gallery/gallery';

import logo from '/assets/skygym-logo-28.png';
import { Link } from 'react-router';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="min-h-[400px] bg-[url('/assets/fonas-poraste.jpg')]">
      <div className="container mx-auto p-10 flex flex-col py-10">
        <div className="grid grid-flow-col gap-3">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-gray-200 mb-5">
              Sporto klubas „SkyGym“
            </h3>
            <p className="text-gray-300">
              Per keletą metų sukūrėme aplinką, puikiai tinkančią visų rūšių
              jėgos ir ištvermės treniruotėms.
            </p>
            <p>Vienintelis dalykas, kurio reikia – Jūsų noras.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-200">Nuotraukos</h3>
            <Gallery />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-gray-200 mb-5">
              {t('titleContacts')}
            </h3>
            <div className="flex gap-3">
              <img src={'/assets/viber-icon.png'} alt="Viber icon" />
              <img src={'/assets/whatsapp-icon.png'} alt="Whatsapp icon" />
            </div>
            <div className="flex gap-2 text-gray-300">
              <FiPhoneCall size={18} />
              <p>{MAININFO.mobile}</p>
            </div>
            <div className="flex gap-2 text-gray-300">
              <MdOutlineLocationOn size={22} />
              <p>{MAININFO.address}</p>
            </div>
            <a
              className="flex gap-2 items-center text-gray-300 hover:text-gray-50"
              href="https://www.facebook.com/sportas.skygym/"
              target="_blank"
            >
              <FaFacebook size={24} /> SkyGym Facebook
            </a>
            <a
              className="flex gap-2 items-center text-gray-300 hover:text-gray-50"
              href="https://www.instagram.com/skygym.lt/"
              target="_blank"
            >
              <FaInstagramSquare size={24} />
              <p>SkyGym Instagram</p>
            </a>
            <a
              className="flex gap-2 items-center text-gray-300 hover:text-gray-50"
              href="https://www.youtube.com/channel/UCLJuXsBDLpQmwZNC8ILL2sA"
              target="_blank"
            >
              <FaYoutube size={26} />
              <p>SkyGym Youtube</p>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 border-t-[1px] border-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 py-2">
            <img src={logo} alt="SkyGym logo footer" />
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} <Link to="/">SkyGym</Link> -{' '}
              {t('footerCopy')}
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/in/marijus-smiginas/"
              target="_blank"
            >
              Sukurė: Vaizdyla
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
