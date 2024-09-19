import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CatFactCardProps {
  author: string;
  fact: string;
}

const CatFactCard: React.FC<CatFactCardProps> = ({ author, fact }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">By: {author}</Typography>
        <Typography variant="body2">Fact: {fact}</Typography>
      </CardContent>
    </Card>
  );
};

export default CatFactCard;
