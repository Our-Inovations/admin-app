import { useFormik } from 'formik';
import { FormEvent, memo, useEffect, useState } from 'react';
import { Input, AppButton } from 'components';
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
import { addStudent, getBus } from 'components/config/firebase';
import { useRouter } from 'next/router';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};

type TData = {
  student_name: string;
  parent_name: string;
  enrollment_id: string;
  parent_number: number;
  email: string;
  address: string;
  bus: string;
  route: string;
  fee: boolean;
};

const Customer = ({ handleSubmit }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [bus, setBus] = useState('');
  const formik = useFormik<TData>({
    initialValues: {
      student_name: '',
      parent_name: '',
      enrollment_id: '',
      parent_number: 0,
      email: '',
      address: '',
      bus: '',
      route: '',
      fee: false,
    },

    onSubmit: async value => {
      await addStudent(value);
      router.push('/student-details');
    },
  });
  useEffect(() => {
    async function getData() {
      const res = await getBus();
      setData(res);
    }
    getData();
  }, []);
  const settData = data?.map((item: any) => {
    return {
      ...item,
      name: item?.bus_name,
    };
  });
  useEffect(() => {
    formik.setFieldValue('bus', bus);
  }, [bus]);
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
          <CardHeader title={'Add Student Form'} />
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
                name="parent_name"
                label={'Parent/Guardian Name'}
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
            <Grid item md={6} xs={12}>
              <Input
                name="parent_number"
                label={'Parent Phone Number'}
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
              <Input
                name="email"
                label={'Email Address'}
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.touched.email && formik.errors.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
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
                name="route"
                label={'Route'}
                value={formik.values.route}
                onChange={formik.handleChange}
                helperText={formik.touched.route && formik.errors.route}
                error={Boolean(formik.touched.route && formik.errors.route)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <Dropdown
                                name="bus"
                                label={'Assigned bus'}
                                list={settData ?? []}
                                value={bus}
                                handleChange={(e) => { setBus(e.target.value); }}
                                selected={''}                            // handleChange={(e, v) => { console.log(v?.props?.value) }}
                            /> */}
              <FormControl sx={{ marginTop: 2, minWidth: '100%' }}>
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

export const AddStudent = memo(Customer);
