import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import moment from 'moment'
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
  constructor(props) {
    super(props)
    this.state = {
      // dataArray: []
    }
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';




  render() {

    let countOfYear = 1
    let yearOfBegin = 2017
    let dataArray = []

    let count = this.props.launches.length - 1

    while (count > 0) {
      if (Number(moment(this.props.launches[count].date).format('YYYY')) != Number(moment(this.props.launches[count - 1].date).format('YYYY'))) {
        countOfYear++
      }
      count--
    }

    while (countOfYear > 0) {
      let flag = this.props.launches.length - 1
      let success = 0
      let fail = 0
      while (flag >= 0) {
        if (this.props.launches[flag].result == 'SUCCESS' && Number(moment(this.props.launches[flag].date).format('YYYY')) == yearOfBegin) {
          success++
        } else if (this.props.launches[flag].result != 'SUCCESS' && Number(moment(this.props.launches[flag].date).format('YYYY')) == yearOfBegin) {
          fail++
        }
        flag--
      }

      dataArray.push({ name: yearOfBegin, 'успешно': success, 'Не успешно': fail })
      yearOfBegin++
      countOfYear--
      success = 0
      fail = 0
    }

    return (
      <div className='SBC'>
        <BarChart
          width={500}
          height={300}
          data={dataArray}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="успешно" stackId="a" fill="green" />
          <Bar dataKey="Не успешно" stackId="a" fill="red" />
        </BarChart>
      </div>
    );
  }
}