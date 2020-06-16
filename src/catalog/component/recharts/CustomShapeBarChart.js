import React, { PureComponent } from 'react';
import { Button, Radio } from 'antd'
import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, ResponsiveContainer,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './css/index.css'

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default class CustomShapeBarChart extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data1: [
                {
                    name: 'Россия', female: 24,
                },
                {
                    name: 'США', female: 13,
                },
                {
                    name: 'Евросоюз', female: 9,
                },
                {
                    name: 'Индия', female: 3,
                },
                {
                    name: 'Иран', female: 4,
                },
                {
                    name: 'Китай', female: 3,
                },
                {
                    name: 'Япония', female: 4,
                },
                {
                    name: 'Великобр', female: 8,
                },
                {
                    name: 'Великобритания', female: 8,
                },
                {
                    name: 'Вdsf', female: 8,
                },
                {
                    name: 'qwww', female: 8,
                },
            ],
            data2: [
                {
                    name: 'Россия', female: 240,
                },
                {
                    name: 'США', female: 130,
                },
                {
                    name: 'Евросоюз', female: 90,
                },
                {
                    name: 'Индия', female: 30,
                },
                {
                    name: 'Иран', female: 40,
                },
                {
                    name: 'Китай', female: 30,
                },
                {
                    name: 'Япония', female: 40,
                },
            ],
            data3: [
                {
                    name: 'Россия', female: 20,
                },
                {
                    name: 'США', female: 10,
                },
                {
                    name: 'Евросоюз', female: 7,
                },
                {
                    name: 'Индия', female: 5,
                },
                {
                    name: 'Иран', female: 9,
                },
                {
                    name: 'Китай', female: 13,
                },
                {
                    name: 'Япония', female: 5,
                },

            ],
            data: [
                {
                    name: 'Россия', female: 24,
                },
                {
                    name: 'США', female: 13,
                },
                {
                    name: 'Евросоюз', female: 9,
                },
                {
                    name: 'Индия', female: 3,
                },
                {
                    name: 'Иран', female: 4,
                },
                {
                    name: 'Китай', female: 3,
                },
                {
                    name: 'Япония', female: 4,
                },
                {
                    name: 'Великобр', female: 8,
                },
                {
                    name: 'Великобритания', female: 8,
                },
                {
                    name: 'Вdsf', female: 8,
                },
                {
                    name: 'qwww', female: 8,
                },
            ],
        }
        // this.changeData = this.changeData.bind(this)
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

    changeData = (e) => {
        this.setState({ data: e.target.value })
        console.log(e.target.value);
    }

    render() {
        return (
            <div className='title2'>
                <BarChart
                    width={700}
                    height={400}
                    data={this.state.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {
                            this.state.data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))
                        }
                    </Bar>
                </BarChart>

                <div classname='radioGroupOnCustomBar'>
                    <Radio.Group defaultValue={this.state.data1} onChange={this.changeData}>
                        <Radio value={this.state.data1}>2020</Radio>
                        <Radio value={this.state.data2}>2019</Radio>
                        <Radio value={this.state.data3}>2018</Radio>
                    </Radio.Group>
                </div>
            </div>
        )
    }
}
