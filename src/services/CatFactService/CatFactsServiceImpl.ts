// src/services/CatFactsService.ts
import { Observable } from 'rxjs';
import { ICatFactsService } from './ICatFactsService';
import { injectable } from 'inversify';

const CAT_FACTS_URL = import.meta.env.VITE_CAT_FACTS_URL;

@injectable()
export class CatFactsServiceImpl implements ICatFactsService {
  fetchCatFacts(): Observable<{ user: string; fact: string }[]> {
    return new Observable((observer) => {
      const eventSource = new EventSource(CAT_FACTS_URL);

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        observer.next(data);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
