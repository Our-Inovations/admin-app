import { memo } from 'react';
import { AppButton, Card } from 'components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, CardContent, CardHeader, Divider } from '@mui/material';

const AppLatestSalesComponent = () => {
  return (
    <Card>
      <CardHeader
        action={
          <AppButton
            size="small"
            variant="text"
            onClick={() => {}}
            title={'OVERVIEW'}
            endIcon={<ArrowDropDownIcon fontSize="small" />}
          />
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative',
          }}
        ></Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <AppButton
          size="small"
          variant="text"
          onClick={() => {}}
          title={'OVERVIEW'}
          endIcon={<ArrowRightIcon fontSize="small" />}
        />
      </Box>
    </Card>
  );
};

export const AppLatestSales = memo(AppLatestSalesComponent);
