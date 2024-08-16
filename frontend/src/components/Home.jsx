import { Grid } from '@mui/material';
import React from 'react';
import EmailCard from './email-proofread/Card';
import JsonGeneratorCard from './generate-json/Card';

const Home = () => {
  return (
    <Grid container spacing={2}>
      {/* Grid item for EmailCard */}
      <Grid item xs={4} sm={4} md={4}>
        <EmailCard />
      </Grid>

      {/* Grid item for JsonGeneratorCard */}
      <Grid item xs={4} sm={4} md={4}>
        <JsonGeneratorCard />
      </Grid>

      {/* Add more Grid items as needed to fill a 3x3 grid */}
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 3rd item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 4th item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 5th item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 6th item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 7th item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 8th item */}
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Placeholder for the 9th item */}
      </Grid>
    </Grid>
  );
};

export default Home;
