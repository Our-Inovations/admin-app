import React, { forwardRef } from 'react';
// eslint-disable-next-line
const PrintComponent = forwardRef((props: { data: any }, ref: any) => {
  return (
    <div ref={ref}>
      <div style={{ width: '400px', textAlign: 'center', margin: 'auto' }}>
        <div>
          {/* <p
            style={{
              fontWeight: '600',
              fontSize: '50px',
              color: '#5048E5',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Trax Tracking{' '}
          </p>{' '} */}
          <img src="/images/tracking_logo.png" width={200} height={150} />
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
            Student Name:{'   '}{' '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {props.data.student_name}
            </span>{' '}
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Enrollment ID: {'   '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {' '}
              {props.data.enrollment_id}{' '}
            </span>
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Address: {'   '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {' '}
              {props.data.address}{' '}
            </span>
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Distance Per KM: {'   '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {props.data.distance_per_km}{' '}
            </span>
          </p>
        </div>
        <div>
          {' '}
          <p style={{ fontWeight: '600', fontSize: '26px' }}>
            {' '}
            Amount Per KM: {'   '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {' '}
              {props.data.amount_per_km}{' '}
            </span>
          </p>
        </div>
        <div>
          {' '}
          <p
            style={{
              fontWeight: '600',
              fontSize: '26px',
              marginTop: '20px',
              borderTop: '1px solid black',
            }}
          >
            {' '}
            Total: {'   '}{' '}
            <span style={{ fontWeight: '700', marginLeft: '20px' }}>
              {props.data.amount_per_km * props.data.distance_per_km}{' '}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default PrintComponent;
