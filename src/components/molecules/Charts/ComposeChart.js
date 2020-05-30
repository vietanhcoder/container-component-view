import React, { PureComponent } from 'react';
import {
  ComposedChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

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

export default class DefaultPage extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart width={100} height={100} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="member" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
