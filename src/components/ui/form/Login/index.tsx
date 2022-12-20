import { theme } from 'theme';
import { useFormik } from 'formik';
import { Box, Grid, Typography } from '@mui/material';
import { AppButton } from '../../../common/Button';
import { Card } from '../../../common/Card';

import { LOGIN_FORM_SCHEMA } from 'config/schema-validators';
import { Input } from 'components';
import { Dispatch, memo, SetStateAction } from 'react';
import { IAuthLoginForm } from '../../../../interfaces/forms';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserDetails } from 'redux/slices/user.slice';

type Props = {
  handleLogin: (
    values: IAuthLoginForm,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
  ) => void;
};

const AuthLoginFormComponent = ({ handleLogin }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik<IAuthLoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LOGIN_FORM_SCHEMA(),
    onSubmit: (values: any) => {
      if (
        values.email == 'master@mailinator.com' &&
        values.password == 'master123'
      ) {
        dispatch(setUserDetails({ isUser: true }));
        router.push('/');
      } else {
        alert('Enter Correct Email or password');
      }
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="space-around">
          <Grid item xs={11} md={4} alignItems={'center'} display={'flex'}>
            <Image
              src={'/images/tracking_logo.png'}
              width="400px"
              height="250px"
            />
          </Grid>
          <Grid item xs={11} md={4}>
            <Card
              elevation={13}
              sx={{ p: 2, background: theme.palette.background.paper }}
            >
              <Box sx={{ my: 3, textAlign: 'center' }}>
                <Typography color="textPrimary" variant="h4">
                  {'SIGN IN'}
                </Typography>
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <Input
                  name="email"
                  type="email"
                  label={'EMAIL'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                />
                <Input
                  name="password"
                  type="password"
                  label={'PASSWORD'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.touched.password && formik.errors.password}
                  error={Boolean(
                    formik.touched.password && formik.errors.password,
                  )}
                />
                <AppButton
                  fullWidth
                  type="submit"
                  sx={{ my: 2 }}
                  title={'SUBMIT'}
                />
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const AuthLoginForm = memo(AuthLoginFormComponent);
