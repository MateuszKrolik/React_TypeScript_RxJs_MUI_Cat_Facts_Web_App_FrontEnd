import { useContext } from 'react';
import { ICatFactsService } from '../services/CatFactService/ICatFactsService';
import { CatFactsServiceContext } from '../contexts/CatFactsServiceContext';

export const useCatFactsService = (): ICatFactsService => {
  const context = useContext(CatFactsServiceContext);
  if (!context) {
    throw new Error(
      'useCatFactsService must be used within a CatFactsServiceProvider'
    );
  }
  return context;
};
