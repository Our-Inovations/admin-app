import React from 'react';
import { useSelector } from 'react-redux';

const UserStore = () => {
  const data = useSelector((state: any) => state.user);
  console.log(data);
  return <div>Hello React Nextjs</div>;
};

export default UserStore;
