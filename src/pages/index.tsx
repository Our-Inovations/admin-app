import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid } from '@mui/material';
import { AppTotalCustomer, AppTasksProgress, Layout } from 'components';
// import { HEADINGS_TRANSLATION_KEYS } from 'locales';
// import { PageLocaleProps } from 'interfaces/locales';

// const { DASHBOARD } = HEADINGS_TRANSLATION_KEYS;

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  paddingBottom: 64,
}));

function Page() {
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppTotalCustomer />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppTasksProgress />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayoutRoot>
    </>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'DASHBOARD'}>{page}</Layout>
);

export default Page;
