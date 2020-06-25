import React, { PureComponent } from 'react';
import { Button, Radio } from 'antd'
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, ResponsiveContainer, Pie,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './css/index.css'
import {
    LoadingOutlined,
} from '@ant-design/icons';
import {getPeriodLaunches, getAgency} from "../../requestService";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text style={{ fontWeight: 700, fontSize: "18px"}} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default class CustomShapeBarChart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            manufacturers: [
                {
                    name: "РКЦ «Прогресс»",
                    value: 0,
                    color: "#FF9933"
                },
                {
                    name: "ГКНПЦ им. Хруничева",
                    value: 0,
                    color: "#CC3333"
                },
            ]
        }
    }

    render() {
        const { launches } = this.props;
        const { manufacturers } = this.state;
        let tempManufacturers = manufacturers;
        console.log(launches);
        if (tempManufacturers[0].value === 0) {
            launches.forEach((item, index) => {
                if (item.launch_vehicle.manufacturer === "РКЦ «Прогресс»") {
                    tempManufacturers[0].value ++;
                } else {
                    tempManufacturers[1].value ++;
                }
            });

            this.setState({ manufacturers: tempManufacturers });
        }
        console.log(manufacturers);

        return (
            <div className='title2'>
                <h1 style={{color: "white", textAlign: "center"}}>Производители ракетоносителей запускаемых роскосмосом</h1>
                {manufacturers[0].value !== 0 ? (
                    <>
                        <PieChart width={600} height={400} onMouseEnter={this.onPieEnter}>
                            <Pie
                                data={manufacturers}
                                cx={300}
                                cy={200}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={120}
                                fill="#8884d8"
                            >
                                {
                                    manufacturers.map((item, index) => <Cell fill={item.color}/>)
                                }
                            </Pie>
                        </PieChart>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h1 style={{ color: manufacturers[0].color, fontSize: "26px" }}>{ manufacturers[0].name}</h1>
                            <h1 style={{ color: manufacturers[1].color, fontSize: "26px" }}>{ manufacturers[1].name}</h1>
                        </div>

                    </>
                ) :
                    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                        <LoadingOutlined style={{ fontSize: '100px' }} /></div>)}
            </div>
        )
    }
}
