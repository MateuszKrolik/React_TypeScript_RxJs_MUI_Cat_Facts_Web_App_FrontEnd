import { Observable } from 'rxjs';

const CAT_FACTS_URL = import.meta.env.VITE_CAT_FACTS_URL;

export const fetchCatFacts = (): Observable<
  { user: string; fact: string }[]
> => {
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
};
