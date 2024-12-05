import { BrowserRouter, Route, Routes } from 'react-router';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Admin pages
import { SuvestinePage } from './pages/admin/Suvestine';
import { NustatymaiPage } from './pages/admin/Nustatymai';

// Pages
import { HomePage } from './pages/home/home';
import { ContactsPage } from './pages/contacts/contacts';
import { PricelistPage } from './pages/pricelist/pricelist';
import { TocPage } from './pages/toc/toc';
import { LoginPage } from './pages/Login';
import { NotFoundPage } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="kainos" element={<PricelistPage />} />
          <Route path="taisykles" element={<TocPage />} />
          <Route path="kontaktai" element={<ContactsPage />} />
          <Route path="prisijungimas" element={<LoginPage />} />
          <Route path="registracija" element={<LoginPage />} />
        </Route>
        <Route path="/suvestine" element={<AdminLayout />}>
          <Route index element={<SuvestinePage />} />
          <Route path="nustatymai" element={<NustatymaiPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
