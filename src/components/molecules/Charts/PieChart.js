import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

renderCustomizedLabel.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  midAngle: PropTypes.number.isRequired,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default class DefaultPage extends PureComponent {
  render() {
    const { data, colors, outerRadius, tooltip, legend } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {tooltip && <Tooltip />}
          {legend && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

DefaultPage.defaultProps = {
  outerRadius: 200,
  tooltip: true,
  legend: true,
};

DefaultPage.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  outerRadius: PropTypes.number,
  tooltip: PropTypes.bool,
  legend: PropTypes.bool,
};
