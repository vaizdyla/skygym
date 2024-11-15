import { MainMenu } from './mainmenu';
import { Topbar } from './topbar';

export const Header = () => {
  return (
    <header className="bg-slate-900">
      <Topbar />
      <MainMenu />
    </header>
  );
};
