import { theme } from 'theme';
import { useFormik } from 'formik';
import { Box, Grid, Typography } from '@mui/material';
import { AppButton } from '../../../common/Button';
import { Card } from '../../../common/Card';

import { LOGIN_FORM_SCHEMA } from 'config/schema-validators';
import { Input } from 'components';
import { Dispatch, memo, SetStateAction, useState } from 'react';
import { IAuthLoginForm } from '../../../../interfaces/forms';
import { AppLoader } from 'components/common/AppLoader';

type Props = {
  handleLogin: (
    values: IAuthLoginForm,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
  ) => void;
};

const AuthLoginFormComponent = ({ handleLogin }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<IAuthLoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LOGIN_FORM_SCHEMA(),
    onSubmit: (values: IAuthLoginForm) => {
      handleLogin(values, setIsLoading);
    },
  });

  if (isLoading) {
    return <AppLoader />;
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="space-around">
          <Grid
            item
            xs={11}
            md={4}
            alignItems={'center'}
            display={'flex'}
          ></Grid>
          <Grid item xs={11} md={4}>
            <Card
              elevation={13}
              sx={{ p: 2, background: theme.palette.background.paper }}
            >
              <Box sx={{ my: 3, textAlign: 'center' }}>
                <Typography color="textPrimary" variant="h4">
                  {'SIGN_IN'}
                </Typography>
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <Input
                  name="email"
                  type="email"
                  label={'EMAIL'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.errors.email}
                  error={Boolean(formik.errors.email)}
                />
                <Input
                  name="password"
                  type="password"
                  label={'PASSWORD'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.errors.password}
                  error={Boolean(formik.errors.password)}
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
