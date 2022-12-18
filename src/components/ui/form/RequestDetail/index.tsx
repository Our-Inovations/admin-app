import { useFormik } from 'formik';
import { FormEvent, memo, useEffect } from 'react';
import { AppButton, Input } from 'components';
import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { deleteFromApp } from 'components/config/firebase';
import { useRouter } from 'next/router';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  data?: any;
};

type TData = {
  student_name: string;
  parent_name: string;
  enrollment_id: string;
  parent_number: number;
  email: string;
  address: string;
};

const Customer = ({ handleSubmit, data }: Props) => {
  const router = useRouter();
  const formik = useFormik<TData>({
    initialValues: {
      student_name: data?.student_name,
      parent_name: data?.parent_name,
      enrollment_id: data?.enrollment_id,
      parent_number: data?.parent_number,
      email: data?.email,
      address: data?.address,
    },
    onSubmit: async value => {},
  });
  useEffect(() => {
    formik.setFieldValue('student_name', data?.student_name);
    formik.setFieldValue('parent_name', data?.parent_name);
    formik.setFieldValue('enrollment_id', data?.enrollment_id);
    formik.setFieldValue('parent_number', data?.parent_number);
    formik.setFieldValue('email', data?.email);
    formik.setFieldValue('address', data?.address);
  }, [data]);
  async function accept() {
    await deleteFromApp(data?.id);
    router.push('/registration-request');
    alert('Accepted');
  }
  async function reject() {
    await deleteFromApp(data?.id);
    alert('Declined');
  }
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
          <CardHeader title={'Student Details'} />
          <div>
            <AppButton title="Accept" color="success" onClick={accept} />
            <AppButton title="Decline" color="error" onClick={reject} />
          </div>
        </div>

        <Divider style={{ borderColor: '#E6E8F0' }} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              Name
              <Input
                name="student_name"
                disabled
                value={formik.values.student_name}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.student_name && formik.errors.student_name
                }
                error={Boolean(
                  formik.touched.student_name && formik.errors.student_name,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              Parent/Guardian Name
              <Input
                name="parent_name"
                disabled
                // label={'Parent/Guardian Name'}
                value={formik.values.parent_name}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.parent_name && formik.errors.parent_name
                }
                error={Boolean(
                  formik.touched.parent_name && formik.errors.parent_name,
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              Enrollment ID
              <Input
                name="enrollment_id"
                disabled
                // label={'Enrollment ID'}
                value={formik.values.enrollment_id}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.enrollment_id && formik.errors.enrollment_id
                }
                error={Boolean(
                  formik.touched.enrollment_id && formik.errors.enrollment_id,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              Parent Phone Number
              <Input
                name="parent_number"
                disabled
                // label={'Parent Phone Number'}
                value={formik.values.parent_number}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.parent_number && formik.errors.parent_number
                }
                error={Boolean(
                  formik.touched.parent_number && formik.errors.parent_number,
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              House Address
              <Input
                disabled
                name="address"
                // label={'House Address'}
                value={formik.values.address}
                onChange={formik.handleChange}
                helperText={formik.touched.address && formik.errors.address}
                error={Boolean(formik.touched.address && formik.errors.address)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const RequestDetail = memo(Customer);
