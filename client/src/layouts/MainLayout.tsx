import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
