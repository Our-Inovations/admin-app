import { useFormik } from 'formik';
import { FormEvent, memo } from 'react';
import { Input, AppButton } from 'components';
import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { addBus } from 'components/config/firebase';
import { useRouter } from 'next/router';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};

type TData = {
  bus_name: string;
  bus_model: string;
  bus_color: string;
  bus_Liscene: string;
};

const Customer = ({ handleSubmit }: Props) => {
  const router = useRouter();
  const formik = useFormik<TData>({
    initialValues: {
      bus_name: '',
      bus_model: '',
      bus_color: '',
      bus_Liscene: '',
    },

    onSubmit: async value => {
      await addBus(value);
      router.push('/bus-details');
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
          <CardHeader title={'Add Bus Form'} />
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
                name="bus_name"
                label={'Bus Name'}
                value={formik.values.bus_name}
                onChange={formik.handleChange}
                helperText={formik.touched.bus_name && formik.errors.bus_name}
                error={Boolean(
                  formik.touched.bus_name && formik.errors.bus_name,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="bus_model"
                label={'Bus Model'}
                value={formik.values.bus_model}
                onChange={formik.handleChange}
                helperText={formik.touched.bus_model && formik.errors.bus_model}
                error={Boolean(
                  formik.touched.bus_model && formik.errors.bus_model,
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="bus_color"
                label={'Bus Color'}
                value={formik.values.bus_color}
                onChange={formik.handleChange}
                helperText={formik.touched.bus_color && formik.errors.bus_color}
                error={Boolean(
                  formik.touched.bus_color && formik.errors.bus_color,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="bus_Liscene"
                label={'Bus Liscene number'}
                value={formik.values.bus_Liscene}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.bus_Liscene && formik.errors.bus_Liscene
                }
                error={Boolean(
                  formik.touched.bus_Liscene && formik.errors.bus_Liscene,
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const AddBus = memo(Customer);
