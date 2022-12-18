import { memo } from 'react';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Theme, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
type StyleType = { theme: Theme };

const DashboardNavbarRoot = styled(AppBar)(({ theme }: StyleType) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DashboardNavbarComponent = (props: any) => {
  const { onSidebarOpen, ...other } = props;
  return (
    <DashboardNavbarRoot
      sx={{
        left: { lg: 280 },
        width: { lg: 'calc(100% - 280px)' },
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

export const DashboardNavbar = memo(DashboardNavbarComponent);
