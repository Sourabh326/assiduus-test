import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '9',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '10',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '11',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '12',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '13',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '14',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '15',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" strokeWidth={4} stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
