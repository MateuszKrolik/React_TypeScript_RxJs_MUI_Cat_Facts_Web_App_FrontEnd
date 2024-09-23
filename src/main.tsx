import 'reflect-metadata';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { container } from './inversify.config.ts';
import { ICatFactsService } from './services/CatFactService/ICatFactsService.ts';
import { TYPES } from './types.ts';
import { CatFactsServiceProvider } from './contexts/CatFactsServiceContext.tsx';

// resolve dependencies as close to composition root as possible
// to avoid "service location" anti-pattern
const catFactsService = container.get<ICatFactsService>(TYPES.ICatFactsService);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatFactsServiceProvider service={catFactsService}>
      <App />
    </CatFactsServiceProvider>
  </StrictMode>
);
