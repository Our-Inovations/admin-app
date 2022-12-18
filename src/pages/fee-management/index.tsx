import React from 'react';
import { Layout } from 'components/ui/Layout';
import { Box, Grid } from '@mui/material';
import { AppButton } from 'components/index';
import { useRouter } from 'next/router';
function Page() {
  const router = useRouter();
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem 0rem',
            }}
          >
            <h2>Fee Management</h2>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <AppButton
            sx={{ mx: 1 }}
            onClick={() => {
              router.push('fee-management/paid');
            }}
            title={'Paid / UnPaid Fee Students'}
          />
          <AppButton
            sx={{ mx: 1 }}
            title={'Generate Fee Challan'}
            onClick={() => {
              router.push('fee-management/fee-challan');
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'STUDENT DETAILS'}>{page}</Layout>
);

export default Page;
