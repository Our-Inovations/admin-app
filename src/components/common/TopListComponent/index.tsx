import { Box } from '@mui/material';
import { memo } from 'react';
import { AppButton } from '../Button';

const TopListComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0rem',
      }}
    >
      <h2>Bus Details</h2>
      <AppButton title="Add Button" />
    </Box>
  );
};

export const TopList = memo(TopListComponent);
