import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home';
import { ContactsPage } from './pages/contacts/contacts';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PricelistPage } from './pages/pricelist/pricelist';
import { TocPage } from './pages/toc/toc';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kainorastis" element={<PricelistPage />} />
        <Route path="/taisykles" element={<TocPage />} />
        <Route path="/kontaktai" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
