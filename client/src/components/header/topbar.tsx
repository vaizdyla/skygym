import { FiPhoneCall } from 'react-icons/fi';
import { MAININFO } from '../../constants/maininfo';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';

export const Topbar = () => {
  return (
    <div className="container mx-auto px-10 text-gray-200 text-sm">
      <div className="border-b-[1px] border-gray-400 py-1 flex items-center justify-between">
        <div className="flex gap-3">
          <p className="flex gap-1 items-center">
            <FiPhoneCall size={16} />
            {MAININFO.mobile}
          </p>
          <p className="flex gap-1 items-center">
            <MdOutlineLocationOn size={20} />
            {MAININFO.address}
          </p>
          <p className="flex gap-1 items-center">
            <FaRegClock size={16} />
            I-V:{' '}
            <span className="text-emerald-500 font-semibold">
              6:00 - 22:00
            </span>{' '}
            VI-VII{' '}
            <span className="text-rose-500 font-semibold">10:00 - 18:00</span>
          </p>
        </div>
        <div className="flex gap-2">
          <p>Administracija</p>
          <FaRegClock size={16} />
          <p>
            I-V:{' '}
            <span className="text-emerald-500 font-semibold">
              13:00 - 21:00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
