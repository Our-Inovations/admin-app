import React, { forwardRef } from 'react';
// eslint-disable-next-line
const PrintComponent = forwardRef((props: { data: any }, ref: any) => {
  return (
    <div ref={ref}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <div style={{ width: '300px', textAlign: 'center', margin: 'auto' }}>
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
            <p style={{ textAlign: 'start' }}>Student Copy</p>
            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              justifyContent: 'space-between',
            }}
          >
            {/* 
            <p
              style={{
                fontWeight: '600',
                fontSize: '30px',
                textDecoration: 'underline',
              }}
            >
              {' '}
              Student Challan Fee{' '}
            </p>{' '} */}
            <div>
              <p>Challan NO : {props.data.challan_no}</p>
              <p>Account NO : {props.data.challan_no}</p>
            </div>
            <p>Date: {props.data.due_date} </p>
          </div>
          <hr />
          <div>
            {' '}
            <p style={{ fontWeight: '600', marginTop: '20px' }}>
              {' '}
              Student Name:{'   '}{' '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.student_name}
              </span>{' '}
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
              {' '}
              Distance Per KM: {'   '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.distance_per_km}{' '}
              </span>
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
        <div style={{ width: '300px', textAlign: 'center', margin: 'auto' }}>
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
            <p style={{ textAlign: 'start' }}>School Copy</p>

            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              justifyContent: 'space-between',
            }}
          >
            {/* 
            <p
              style={{
                fontWeight: '600',
                fontSize: '30px',
                textDecoration: 'underline',
              }}
            >
              {' '}
              Student Challan Fee{' '}
            </p>{' '} */}
            <div>
              <p>Challan NO : {props.data.challan_no}</p>
              <p>Account NO : {props.data.challan_no}</p>
            </div>
            <p>Date: {props.data.due_date} </p>
          </div>
          <hr />
          <div>
            {' '}
            <p style={{ fontWeight: '600', marginTop: '20px' }}>
              {' '}
              Student Name:{'   '}{' '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.student_name}
              </span>{' '}
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
              {' '}
              Distance Per KM: {'   '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.distance_per_km}{' '}
              </span>
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
      </div>
      <div style={{ width: '80%', display: 'flex', margin: 'auto' }}>
        <div style={{ width: '300px', textAlign: 'center', marginTop: '60px' }}>
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
            <p style={{ textAlign: 'start' }}>Bank Copy</p>
            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              justifyContent: 'space-between',
            }}
          >
            {/* 
            <p
              style={{
                fontWeight: '600',
                fontSize: '30px',
                textDecoration: 'underline',
              }}
            >
              {' '}
              Student Challan Fee{' '}
            </p>{' '} */}
            <div>
              <p>Challan NO : {props.data.challan_no}</p>
              <p>Account NO : {props.data.challan_no}</p>
            </div>
            <p>Date: {props.data.due_date} </p>
          </div>
          <hr />
          <div>
            {' '}
            <p style={{ fontWeight: '600', marginTop: '20px' }}>
              {' '}
              Student Name:{'   '}{' '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.student_name}
              </span>{' '}
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
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
            <p style={{ fontWeight: '600' }}>
              {' '}
              Distance Per KM: {'   '}
              <span style={{ fontWeight: '700', marginLeft: '20px' }}>
                {props.data.distance_per_km}{' '}
              </span>
            </p>
          </div>
          <div>
            {' '}
            <p style={{ fontWeight: '600' }}>
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
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrintComponent;
