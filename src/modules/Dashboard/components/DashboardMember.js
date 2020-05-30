import React from 'react';

import BarChart from '../../../components/molecules/Charts/BarChart';

const colors = ['#0088FE', '#FFC300', '#f00'];

const data = [
  {
    name: 'January',
    member: 4000,
  },
  {
    name: 'February',
    member: 3000,
  },
  {
    name: 'March',
    member: 2000,
  },
  {
    name: 'Apirl',
    member: 2780,
  },
  {
    name: 'May',
    member: 1890,
  },
  {
    name: 'June',
    member: 2390,
  },
  {
    name: 'July',
    member: 3490,
  },
  {
    name: 'August',
    member: 533,
  },
  {
    name: 'September',
    member: 2145,
  },
  {
    name: 'October',
    member: 1204,
  },
  {
    name: 'November',
    member: 230,
  },
  {
    name: 'December',
    member: 4200,
  },
];

const DashboardMember = () => {
  const total = data.reduce((acc, current) => {
    return acc + current.member;
  }, 0);

  return (
    <>
      <h4>Total: {total} </h4> <br />
      <div className="responsiveContainer">
        <BarChart data={data} colors={colors} keyChart="member" />
      </div>
    </>
  );
};

export default DashboardMember;
