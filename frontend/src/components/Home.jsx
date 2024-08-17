import { Grid } from '@mui/material';
import React from 'react';
import EmailCard from './email-proofread/Card';
import JsonGeneratorCard from './generate-json/Card';
import CheckGrammar from './check-grammar/Card';
const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sm={4} md={4}>
        <EmailCard />
      </Grid>

      <Grid item xs={4} sm={4} md={4}>
        <JsonGeneratorCard />
      </Grid>

      <Grid item xs={4} sm={4} md={4}>
        <CheckGrammar/>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
      </Grid>
    </Grid>
  );
};

export default Home;
