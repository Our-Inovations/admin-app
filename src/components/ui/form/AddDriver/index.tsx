import { useFormik } from 'formik';
import { FormEvent, memo } from 'react';
import { Input, AppButton } from 'components';
import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { addDriver } from 'components/config/firebase';
import { useRouter } from 'next/router';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};
type TData = {
  driver_name: string;
  driver_id: string;
  driver_number: string;
  driver_cnic: string;
};

const Customer = ({ handleSubmit }: Props) => {
  const router = useRouter();
  const formik = useFormik<TData>({
    initialValues: {
      driver_name: '',
      driver_id: '',
      driver_number: '',
      driver_cnic: '',
    },
    onSubmit: async value => {
      await addDriver(value);
      router.push('/driver-details');
    },
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
            <Grid item md={6} xs={12}>
              <Input
                name="driver_name"
                label={'Driver Name'}
                value={formik.values.driver_name}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.driver_name && formik.errors.driver_name
                }
                error={Boolean(
                  formik.touched.driver_name && formik.errors.driver_name,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="driver_id"
                label={'Driver ID'}
                value={formik.values.driver_id}
                onChange={formik.handleChange}
                helperText={formik.touched.driver_id && formik.errors.driver_id}
                error={Boolean(
                  formik.touched.driver_id && formik.errors.driver_id,
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="driver_number"
                label={'Phone Number'}
                value={formik.values.driver_number}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.driver_number && formik.errors.driver_number
                }
                error={Boolean(
                  formik.touched.driver_number && formik.errors.driver_number,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="driver_cnic"
                label={'CNIC Number'}
                value={formik.values.driver_cnic}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.driver_cnic && formik.errors.driver_cnic
                }
                error={Boolean(
                  formik.touched.driver_cnic && formik.errors.driver_cnic,
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const AddDriver = memo(Customer);
