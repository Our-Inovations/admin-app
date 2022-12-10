import React from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { TopList } from 'components/common/TopListComponent';
function Page() {
  const Column = [
    { name: 'bus-1', title: 'bus-1' },
    { name: 'bus-2', title: 'bus-2' },
    { name: 'bus-3', title: 'bus-3' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        padding: '2rem',
        backgroundColor: 'white',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <TopList />
        </Grid>
        <Grid item xs={12}>
          <List columns={Column} content={[]} />
        </Grid>
      </Grid>
    </Box>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'DASHBOARD'}>{page}</Layout>
);

export default Page;
