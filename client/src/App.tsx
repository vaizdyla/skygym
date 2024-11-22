import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Pages
import { HomePage } from './pages/home/home';
import { ContactsPage } from './pages/contacts/contacts';
import { PricelistPage } from './pages/pricelist/pricelist';
import { TocPage } from './pages/toc/toc';
import { LoginPage } from './pages/Login';
import { NotFoundPage } from './pages/NotFound';

// Admin pages
import { SuvestinePage } from './pages/admin/Suvestine';
import { NustatymaiPage } from './pages/admin/Nustatymai';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kainos" element={<PricelistPage />} />
        <Route path="taisykles" element={<TocPage />} />
        <Route path="kontaktai" element={<ContactsPage />} />
        <Route path="prisijungimas" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/suvestine" element={<AdminLayout />}>
        <Route index element={<SuvestinePage />} />
        <Route path="nustatymai" element={<NustatymaiPage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
