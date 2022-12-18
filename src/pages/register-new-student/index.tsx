import { Box } from '@mui/material';
import { Layout } from 'components';
import { RegisterNewStudent } from 'components/ui/form/RegisterNewStudent';

const Page = () => {
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
        <RegisterNewStudent handleSubmit={() => {}} />
      </Box>
    </Box>
  );
};

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'REGISTER NEW STUDENT'}>{page}</Layout>
);

export default Page;
