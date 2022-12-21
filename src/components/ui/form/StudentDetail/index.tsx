import { useFormik } from 'formik';
import { FormEvent, memo, useEffect, useState } from 'react';
import { AppButton, Input } from 'components';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { editStudent, getBus } from 'components/config/firebase';

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
  route: string;
  bus: string;
};

const Customer = ({ handleSubmit, data }: Props) => {
  const formik = useFormik<TData>({
    initialValues: {
      student_name: data?.student_name,
      parent_name: data?.parent_name,
      enrollment_id: data?.enrollment_id,
      parent_number: data?.parent_number,
      email: data?.email,
      address: data?.address,
      route: data?.route,
      bus: data?.bus,
    },

    onSubmit: async value => {
      await editStudent(value, data.id);
      alert('Bus Added');
    },
  });
  useEffect(() => {
    formik.setFieldValue('student_name', data?.student_name);
    formik.setFieldValue('parent_name', data?.parent_name);
    formik.setFieldValue('enrollment_id', data?.enrollment_id);
    formik.setFieldValue('parent_number', data?.parent_number);
    formik.setFieldValue('email', data?.email);
    formik.setFieldValue('address', data?.address);
    formik.setFieldValue('route', data?.route);
    formik.setFieldValue('bus', data?.bus);
    setBus(data?.bus);
  }, [data]);
  const [_data, setData] = useState<any>();
  const [bus, setBus] = useState('');
  useEffect(() => {
    async function getData() {
      const res = await getBus();
      setData(res);
    }
    getData();
  }, []);
  const settData = _data?.map((item: any) => {
    return {
      ...item,
      name: item?.bus_name,
    };
  });
  useEffect(() => {
    formik.setFieldValue('bus', bus);
    const dat = _data?.find((itm: any) => itm.bus_name == bus);
    console.log(dat?.route);
    formik.setFieldValue('route', dat?.route);
  }, [bus]);
  console.log(formik.values);
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
          <AppButton title="Save" type="submit" />
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
              Email Address
              <Input
                name="email"
                disabled
                // label={'Email Address'}
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.touched.email && formik.errors.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
            </Grid>
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
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              Route
              <Input
                name="route"
                value={formik.values.route}
                onChange={formik.handleChange}
                helperText={formik.touched.route && formik.errors.route}
                error={Boolean(formik.touched.route && formik.errors.route)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl sx={{ marginTop: 5, minWidth: '100%' }}>
                <InputLabel id="demo-select-small">Assigned bus</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={bus}
                  label="Assigned bus"
                  onChange={e => {
                    setBus(e.target.value);
                  }}
                >
                  {settData?.map((item: any, ind: number) => {
                    return (
                      <MenuItem key={ind} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export const StudentDetail = memo(Customer);
