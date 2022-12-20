import GroupIcon from '@mui/icons-material/Group';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';

export const MENU = [
  {
    href: '/',
    icon: <SignalCellularAlt2BarIcon />,
    title: 'DASHBOARD',
  },
  {
    href: '/bus-details',
    icon: <GroupIcon />,
    title: 'BUS DETAILS',
  },
  {
    href: '/driver-details',
    icon: <GroupIcon />,
    title: 'DRIVER DETAILS',
  },
  {
    href: '/student-details',
    icon: <GroupIcon />,
    title: 'STUDENT DETAILS',
  },
  {
    href: '/fee-management',
    icon: <GroupIcon />,
    title: 'FEE MANAGEMENT',
  },
  {
    href: '/registration-request',
    icon: <GroupIcon />,
    title: 'REGISTRATION REQUESTS',
  },
];
