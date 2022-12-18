import React, { useEffect, useState } from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { AppButton } from 'components/index';
import { useRouter } from 'next/router';
import { editStudent, getStudent } from 'components/config/firebase';
function Page() {
  const router = useRouter();
  const [data, setData] = useState();
  const Column = [{ name: 'student_name', title: 'name' }];
  useEffect(() => {
    async function getData() {
      const res = await getStudent();
      setData(res);
    }
    getData();
  }, []);
  async function edit(data: any, id: any) {
    await editStudent(data, id);
    const res = await getStudent();
    setData(res);
  }
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
            <h2>Paid / UnPaid Fee Students</h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <List
            columns={Column}
            handleEdit={edit}
            content={data}
            buttonCol={true}
          />
        </Grid>
        <AppButton
          sx={{ mx: 1 }}
          title={'back'}
          onClick={() => {
            router.push('/fee-management');
          }}
        />
      </Grid>
    </Box>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'FEE MANAGEMENT'}>{page}</Layout>
);

export default Page;
