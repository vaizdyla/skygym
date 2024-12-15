import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n.ts';
import App from './App.tsx';
import Store from './store/store.ts';

interface State {
  store: Store;
}

const store = new Store();

export const AuthContext = createContext<State>({ store });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContext.Provider value={{ store }}>
      <App />
    </AuthContext.Provider>
  </StrictMode>
);
