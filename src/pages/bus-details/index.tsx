import React, { useEffect, useState } from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { TopList } from 'components/common/TopListComponent';
import { deleteBus, getBus } from 'components/config/firebase';
function Page() {
  const [data, setData] = useState();
  const [id, setID] = useState();
  const Column = [
    { name: 'bus_name', title: 'bus_name' },
    { name: 'bus_color', title: 'bus_color' },
    { name: 'bus_model', title: 'bus_model' },
    { name: 'bus_Liscene', title: 'bus_Liscene' },
  ];
  useEffect(() => {
    console.log(id);
    async function dlt() {
      if (id) {
        await deleteBus(id);
        const res = await getBus();
        setData(res);
      }
    }
    dlt();
  }, [id]);
  useEffect(() => {
    async function getData() {
      const res = await getBus();
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
          <TopList />
        </Grid>
        <Grid item xs={12}>
          <List columns={Column} content={data} delCol={true} setID={setID} />
        </Grid>
      </Grid>
    </Box>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'DASHBOARD'}>{page}</Layout>
);

export default Page;
