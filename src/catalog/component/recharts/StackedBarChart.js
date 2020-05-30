import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2014', Неудачный: 4, Успешный: 153, 
  },
  {
    name: '2015', Неудачный: 3, Успешный: 168, 
  },
  {
    name: '2016', Неудачный: 2, Успешный: 175, 
  },
  {
    name: '2017', Неудачный: 2, Успешный: 163, 
  },
  {
    name: '2018', Неудачный: 1, Успешный: 178, 
  },
  {
    name: '2019', Неудачный: 2, Успешный: 189, 
  },
  {
    name: '2020', Неудачный: 3, Успешный: 180, 
  },
];

export default class StackedBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Успешный" stackId="a" fill="green" />
        <Bar dataKey="Неудачный" stackId="a" fill="red" />
      </BarChart>
    );
  }
}
