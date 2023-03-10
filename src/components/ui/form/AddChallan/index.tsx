import { useFormik } from 'formik';
import { FormEvent, memo, useEffect, useRef, useState } from 'react';
import { Input, AppButton } from 'components';
import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import PrintComponent from 'components/common/PrintComponent';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
import { getStudent } from 'components/config/firebase';
type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};

type TData = {
  student_name: string;
  enrollment_id: string;
  address: string;
  distance_per_km: string;
  amount_per_km: string;
  parent_name: string;
  challan_no: string;
  due_date: string;
};

const Customer = ({ handleSubmit }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const formik = useFormik<TData>({
    initialValues: {
      student_name: '',
      parent_name: '',
      enrollment_id: '',
      address: '',
      distance_per_km: '',
      amount_per_km: '',
      challan_no: '',
      due_date: '',
    },

    onSubmit: async value => {
      // handlePrint()
      router.push('/fee-management');
    },
  });
  useEffect(() => {
    async function getData() {
      const res = await getStudent();
      const find = res.find(
        (item: any) => item.enrollment_id == formik.values.enrollment_id,
      );
      setData(find);
    }
    getData();
  }, [formik.values.enrollment_id]);
  useEffect(() => {
    formik.setFieldValue('student_name', data?.student_name);
    formik.setFieldValue('parent_name', data?.parent_name);
    formik.setFieldValue('enrollment_id', data?.enrollment_id);
    formik.setFieldValue('parent_number', data?.parent_number);
    formik.setFieldValue('address', data?.address);
  }, [data]);
  const componentRef: any = useRef();
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
          <CardHeader title={'Bus Fee Challan'} />
          <div>
            <ReactToPrint
              trigger={() => (
                <AppButton title="Generate Fee Challan" type="submit" />
              )}
              content={() => componentRef.current}
            />
            <div style={{ display: 'none' }}>
              <PrintComponent data={formik.values} ref={componentRef} />
            </div>
          </div>
        </div>
        <Divider style={{ borderColor: '#E6E8F0' }} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="student_name"
                label={'Student Name'}
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
              <Input
                name="enrollment_id"
                label={'Enrollment ID'}
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
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="parent_name"
                label={'Father Name'}
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
            <Grid item md={6} xs={12}>
              <Input
                name="amount_per_km"
                label={'Amount Per KM'}
                value={formik.values.amount_per_km}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.amount_per_km && formik.errors.amount_per_km
                }
                error={Boolean(
                  formik.touched.amount_per_km && formik.errors.amount_per_km,
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="distance_per_km"
                label={'Distance Per KM'}
                value={formik.values.distance_per_km}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.distance_per_km &&
                  formik.errors.distance_per_km
                }
                error={Boolean(
                  formik.touched.distance_per_km &&
                    formik.errors.distance_per_km,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="address"
                label={'House Address'}
                value={formik.values.address}
                onChange={formik.handleChange}
                helperText={formik.touched.address && formik.errors.address}
                error={Boolean(formik.touched.address && formik.errors.address)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="due_date"
                label={'Due Date'}
                value={formik.values.due_date}
                onChange={formik.handleChange}
                helperText={formik.touched.due_date && formik.errors.due_date}
                error={Boolean(
                  formik.touched.due_date && formik.errors.due_date,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const AddChallan = memo(Customer);
