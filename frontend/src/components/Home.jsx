import { Grid } from '@mui/material';
import React from 'react';
import CheckGrammar from './check-grammar/Card';
import EmailCard from './email-proofread/Card';
import JsonGeneratorCard from './generate-json/Card';

const Home = () => {
  return (
    <div className='font-style'>
      <Grid container spacing={2}>
        {/* Adjust these Grid items for responsiveness */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <EmailCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <JsonGeneratorCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CheckGrammar />
        </Grid>

      </Grid>
    </div>
  );
};

export default Home;
