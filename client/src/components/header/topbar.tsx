import { MAININFO } from '../../constants/maininfo';

export const Topbar = () => {
  return (
    <div className="container mx-auto px-10 text-gray-200 text-sm">
      <div className="border-b-[1px] border-gray-400 py-1 flex items-center justify-between">
        <div className="flex gap-2">
          <p>{MAININFO.mobile}</p>
          <p>{MAININFO.address}</p>
        </div>
        <div>
          <p>Administracija</p>
        </div>
      </div>
    </div>
  );
};
