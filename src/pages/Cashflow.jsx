import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'August',
    uv: 2000,
    pv: 400,
    amt: 1200,
  },
  {
    name: 'September',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'October',
    uv: 300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'November',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'December',
    uv: 1190,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'January',
    uv: 1890,
    pv: 3800,
    amt: 2500,
  },
];

export default class Cashflow extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
