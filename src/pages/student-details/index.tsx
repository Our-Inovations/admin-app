import React, { useEffect, useState } from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { AppButton } from 'components/index';
import { useRouter } from 'next/router';
import { deleteStudent, getStudent } from 'components/config/firebase';
function Page() {
  const router = useRouter();
  const Column = [
    { name: 'student_name', title: 'Name' },
    { name: 'route', title: 'Route' },
    { name: 'bus', title: 'Assign Bus' },
  ];
  const [data, setData] = useState();
  const [id, setID] = useState();
  useEffect(() => {
    async function dlt() {
      if (id) {
        await deleteStudent(id);
        const res = await getStudent();
        setData(res);
      }
    }
    dlt();
  }, [id]);
  useEffect(() => {
    async function getData() {
      const res = await getStudent();
      setData(res);
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
            <h2>Student Details</h2>
            <AppButton
              title="Add Student"
              onClick={() => {
                router.push('student-details/add');
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <List
            columns={Column}
            content={data}
            url={'/student-details'}
            delCol={true}
            setID={setID}
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
