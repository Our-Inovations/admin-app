import { Box } from '@mui/material';
import { Layout } from 'components';
import { getStudent } from 'components/config/firebase';
import { StudentDetail } from 'components/ui/form/StudentDetail';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const pid = router.query.pid;
  useEffect(() => {
    async function getData() {
      const res = await getStudent();
      const find = res.find((item: any) => item.id == pid);
      setData(find);
    }
    getData();
  }, []);
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 6 }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <StudentDetail data={data} handleSubmit={() => {}} />
      </Box>
    </Box>
  );
};

Page.getLayout = (page: JSX.Element) => <Layout heading={'ADD'}>{page}</Layout>;

export default Page;
