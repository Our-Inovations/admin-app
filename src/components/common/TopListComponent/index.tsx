import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { AppButton } from '../Button';

const TopListComponent = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0rem',
      }}
    >
      <h2>Bus Details</h2>
      <AppButton
        title="Add Bus"
        onClick={() => {
          router.push('bus-details/add');
        }}
      />
    </Box>
  );
};

export const TopList = memo(TopListComponent);
