// src/inversify.config.ts
import { Container } from 'inversify';
import { CatFactsServiceImpl } from './services/CatFactService/CatFactsServiceImpl';
import { ICatFactsService } from './services/CatFactService/ICatFactsService';
import { TYPES } from './types';

const container = new Container();
container
  .bind<ICatFactsService>(TYPES.ICatFactsService)
  .to(CatFactsServiceImpl)
  .inSingletonScope();

export { container };
