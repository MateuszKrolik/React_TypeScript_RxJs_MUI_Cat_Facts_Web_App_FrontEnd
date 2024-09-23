import React, { createContext } from 'react';
import { ICatFactsService } from '../services/CatFactService/ICatFactsService';

export const CatFactsServiceContext = createContext<ICatFactsService | null>(null);

interface CatFactsServiceProviderProps {
  service: ICatFactsService;
  children: React.ReactNode;
}

export const CatFactsServiceProvider: React.FC<
  CatFactsServiceProviderProps
> = ({ service, children }) => {
  return (
    <CatFactsServiceContext.Provider value={service}>
      {children}
    </CatFactsServiceContext.Provider>
  );
};
