import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default class DefaultPage extends PureComponent {
  render() {
    const { data, legend, keyChart } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={50}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {legend && <Legend />}
          <Bar dataKey={keyChart} fill="#0088FE" label={{ position: 'top' }} />
          {/* <Bar dataKey={keyChart} fill="#8884d8" label={{ position: 'top' }}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

DefaultPage.defaultProps = {
  legend: false,
};

DefaultPage.propTypes = {
  data: PropTypes.array.isRequired,
  keyChart: PropTypes.string.isRequired,
  legend: PropTypes.bool,
};
