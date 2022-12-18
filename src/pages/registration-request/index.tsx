import React, { useEffect, useState } from 'react';
import { Layout } from 'components/ui/Layout';
import { List } from 'components/common/ListComponent';
import { Box, Grid } from '@mui/material';
import { AppButton } from 'components/index';
import { useRouter } from 'next/router';
import {
  deleteStudent,
  getStudent,
  getStudentFromApp,
} from 'components/config/firebase';
function Page() {
  const router = useRouter();
  const Column = [
    { name: 'student_name', title: 'Name' },
    { name: 'parent_name', title: 'Parent Name' },
    { name: 'enrollment_id', title: 'Roll Number' },
    { name: 'parent_number', title: 'Contact Number' },
    // { name: '' , title: 'Assign Bus' },
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
      const res = await getStudentFromApp();
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
            <h2>Requested Students List</h2>
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
            url={'/registration-request'}
            delCol={false}
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
