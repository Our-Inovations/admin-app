import { useFormik } from 'formik';
import { FormEvent, memo } from 'react';
import { Input, AppButton } from 'components';
import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};

type TData = {
  company_name: string;
  website: string;
  email: string;
  number: number;
  contact_person: string;
  address: string;
  country: string;
};

const Customer = ({ handleSubmit }: Props) => {
  const formik = useFormik<TData>({
    initialValues: {
      company_name: '',
      website: '',
      email: '',
      number: 0,
      contact_person: '',
      address: '',
      country: '',
    },

    onSubmit: () => {},
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ width: '100%', margin: '0rem 1rem' }}
    >
      <Card>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader title={'Add Driver Form'} />
          <AppButton
            sx={{ mx: 1, width: '60px', height: '40px' }}
            type="submit"
            title={'SAVE'}
          />
        </div>

        <Divider style={{ borderColor: '#E6E8F0' }} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Input
                name="email"
                label={'Username'}
                value={formik.values.company_name}
                onChange={formik.handleChange}
                sx={{ width: '50%' }}
                helperText={
                  formik.touched.company_name && formik.errors.company_name
                }
                error={Boolean(
                  formik.touched.company_name && formik.errors.company_name,
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Input
                name="Password"
                label={'Password'}
                sx={{ width: '50%' }}
                value={formik.values.website}
                onChange={formik.handleChange}
                helperText={formik.touched.website && formik.errors.website}
                error={Boolean(formik.touched.website && formik.errors.website)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const RegisterNewStudent = memo(Customer);
