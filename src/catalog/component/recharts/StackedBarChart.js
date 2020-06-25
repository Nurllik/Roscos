import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import moment from 'moment'
import {getPeriodLaunches} from "../../requestService";

export default class StackedBarChart extends PureComponent {
  constructor(props) {
    super(props)
  }
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

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
      <div className='title1'>
        <h1 style={{color: "white", textAlign: "center"}}>График отображает количество успешных и неуспешных запусков ракет</h1>
          <ResponsiveContainer  width={500} height={400}>
            <BarChart
                width={"100%"}
                height={300}
                data={dataArray}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="успешно" stackId="a" fill="green" />
              <Bar dataKey="Не успешно" stackId="a" fill="red" />
            </BarChart>
          </ResponsiveContainer>
      </div>
    );
  }
}
