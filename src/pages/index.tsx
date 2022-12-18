import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import { Layout } from 'components';
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
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="images/tracking_logo.png" width={550} height={400} />
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
