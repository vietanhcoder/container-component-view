import React from 'react';

import LineChart from '../../../components/molecules/Charts/LineChart';

const data = [
  {
    name: 'January',
    project: 4000,
  },
  {
    name: 'February',
    project: 3000,
  },
  {
    name: 'March',
    project: 2000,
  },
  {
    name: 'Apirl',
    project: 2780,
  },
  {
    name: 'May',
    project: 1890,
  },
  {
    name: 'June',
    project: 2390,
  },
  {
    name: 'July',
    project: 3490,
  },
  {
    name: 'August',
    project: 533,
  },
  {
    name: 'September',
    project: 2145,
  },
  {
    name: 'October',
    project: 1204,
  },
  {
    name: 'November',
    project: 230,
  },
  {
    name: 'December',
    project: 4200,
  },
];

const DashboardProject = () => {
  const total = data.reduce((acc, current) => {
    return acc + current.project;
  }, 0);

  return (
    <>
      <h4>Total: {total} </h4> <br />
      <div className="responsiveContainer">
        <LineChart data={data} dataKey="project" />
      </div>
    </>
  );
};

export default DashboardProject;
