import React from 'react';
import CatFactCard from './CatFactCard';
import { useObservableState } from 'observable-hooks';
import { Grid } from '@mui/material';
import { startWith } from 'rxjs';
import { mockData } from '../util/mockData';
import { useCatFactsService } from '../hooks/useCatFactsService';


const CatFactGrid: React.FC = () => {
  const catFactsService = useCatFactsService();
  const [catFacts] = useObservableState(
    () => catFactsService.fetchCatFacts().pipe(startWith(mockData)),
    [] as { user: string; fact: string }[]
  );

  return (
    <Grid container spacing={2}>
      {catFacts.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <CatFactCard author={data.user} fact={data.fact} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CatFactGrid;
