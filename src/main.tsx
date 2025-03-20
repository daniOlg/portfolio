import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { Routes } from '@/routes/routes';
import { store } from '@/store/store';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
);
