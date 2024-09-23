// src/services/ICatFactsService.ts
import { Observable } from 'rxjs';

export interface ICatFactsService {
  fetchCatFacts(): Observable<{ user: string; fact: string }[]>;
}
