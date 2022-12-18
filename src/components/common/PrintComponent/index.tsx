import React, { forwardRef } from 'react';
// eslint-disable-next-line
const PrintComponent = forwardRef((props: { data: any }, ref: any) => {
  return (
    <div ref={ref}>
      <div style={{ width: '400px', textAlign: 'center', margin: 'auto' }}>
        <div>
          <p
            style={{
              fontWeight: '600',
              fontSize: '50px',
              color: '#5048E5',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Trax Tracking{' '}
          </p>{' '}
        </div>
        <div>
          <p
            style={{
              fontWeight: '600',
              fontSize: '40px',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Student Challan Fee{' '}
          </p>{' '}
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px', marginTop: '20px' }}>
            {' '}
            Student Name:{'   '} {props.data.student_name}{' '}
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Enrollment ID: {'   '}
            {props.data.enrollment_id}{' '}
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Address: {'   '}
            {props.data.address}{' '}
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Distance Per KM: {'   '}
            {props.data.distance_per_km}{' '}
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Amount Per KM: {'   '} {props.data.amount_per_km}{' '}
          </p>
        </div>
      </div>
    </div>
  );
});

export default PrintComponent;
