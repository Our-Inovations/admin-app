import { memo } from 'react';
import { Card } from 'components';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

const AppTrafficDeviceComponent = () => {
  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: '#3F51B5',
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: '#E53935',
    },
    {
      title: 'Mobile',
      value: 23,
      icon: PhoneIcon,
      color: '#FB8C00',
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative',
          }}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }, i) => (
            <Box
              key={i}
              sx={{
                p: 1,
                textAlign: 'center',
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export const AppTrafficDevice = memo(AppTrafficDeviceComponent);
