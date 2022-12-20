import { theme } from 'theme';
import { MENU } from './list';
import { NavItem } from './item';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { AppButton } from 'components/common/Button';
import LogoutIcon from '@mui/icons-material/Logout';

type Props = {
  onClose?: () => void;
  open?: boolean;
};

const SidebarComponent = (props: Props) => {
  const router = useRouter();
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });
  useEffect(() => {
    const items = localStorage?.getItem('password');
    if (items === 'master123') {
    } else {
      router.push('/login');
    }
  }, []);
  useEffect(() => {
    if (!router.isReady) return;

    if (open) {
      onClose?.();
    }
  }, [onClose, open, router.asPath, router.isReady]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              px: 3,
              py: '11px',
              borderRadius: 1,
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                TRAX ADMIN
              </Typography>
            </div>
          </Box>
          <Divider
            sx={{
              borderColor: '#2D3748',
              py: 1,
            }}
          />
        </Box>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        {MENU.map((item, i) =>
          item.href ? (
            <NavItem
              key={i}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ) : (
            <Box
              key={i}
              sx={{
                mt: 2,
                px: 2,
                fontWeight: 'fontWeightBold',
                backgroundColor: 'transparent',
                color: theme.palette.text.secondary,
              }}
            >
              {item.title}
            </Box>
          ),
        )}
      </Box>
      <Box
        sx={{
          px: 2,
          py: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mt: 2,
            mx: 'auto',
            width: '160px',
            '& img': {
              width: '100%',
            },
          }}
        ></Box>
        <AppButton
          fullWidth
          color="error"
          sx={{ mt: 2 }}
          endIcon={<LogoutIcon />}
          onClick={() => {
            localStorage.setItem('email', JSON.stringify(null));
            localStorage.setItem('password', JSON.stringify(null));
            router.push('/login');
          }}
          title={'SIGN OUT'}
        />
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.divider,
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.divider,
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: theme => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export const Sidebar = memo(SidebarComponent);
