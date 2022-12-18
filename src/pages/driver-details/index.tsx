import React, { useEffect, useState } from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { AppButton } from 'components/index';
import { useRouter } from 'next/router';
import { deleteDriver, getDriver } from 'components/config/firebase';
function Page() {
  const router = useRouter();
  const [data, setData] = useState();
  const [id, setID] = useState();
  const Column = [
    { name: 'driver_name', title: 'Driver Name' },
    { name: 'driver_id', title: 'Driver Id:' },
    { name: 'driver_number', title: 'Driver Number' },
    { name: 'driver_cnic', title: 'Driver CNIC' },
  ];

  useEffect(() => {
    async function dlt() {
      if (id) {
        await deleteDriver(id);
        const res = await getDriver();
        setData(res);
      }
    }
    dlt();
  }, [id]);
  useEffect(() => {
    async function getData() {
      const res = await getDriver();
      setData(res);
      console.log(res);
    }
    getData();
  }, []);
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
              justifyContent: 'space-between',
              margin: '2rem 0rem',
            }}
          >
            <h2>Driver Details</h2>
            <AppButton
              title="Add Driver"
              onClick={() => {
                router.push('driver-details/add');
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <List columns={Column} content={data} delCol={true} setID={setID} />
        </Grid>
      </Grid>
    </Box>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'DRIVER DETAILS'}>{page}</Layout>
);

export default Page;
