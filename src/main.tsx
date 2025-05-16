import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemesProvider } from '@/app/providers/ThemesProvider';

import '@/app/styles/index.scss';

import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');

createRoot(container!).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemesProvider>
          <App />
        </ThemesProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
