import React from 'react';
import CatFactCard from './CatFactCard';
import { useObservableState } from 'observable-hooks';
import { fetchCatFacts } from '../services/catFactsService';
import { Grid } from '@mui/material';
import { startWith } from 'rxjs';
import { mockData } from '../util/mockData';

const CatFactGrid: React.FC = () => {
  const [catFacts] = useObservableState(
    () => fetchCatFacts().pipe(startWith(mockData)),
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
