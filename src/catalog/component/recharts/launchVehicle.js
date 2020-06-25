import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
        name: 'Page A', uv: 4000, female: 2400, male: 2400,
    },
    {
        name: 'Page B', uv: 3000, female: 1398, male: 2210,
    },
    {
        name: 'Page C', uv: 2000, female: 9800, male: 2290,
    },
    {
        name: 'Page D', uv: 2780, female: 3908, male: 2000,
    },
    {
        name: 'Page E', uv: 1890, female: 4800, male: 2181,
    },
    {
        name: 'Page F', uv: 2390, female: 3800, male: 2500,
    },
    {
        name: 'Page G', uv: 3490, female: 4300, male: 2100,
    },
];

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

export default class LaunchVehicle extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            launchVehicle: [
                {
                    name: "Союз-2",
                    female: 0,
                    color: "#FF5F00"
                },
                {
                    name: "Протон-М",
                    female: 0,
                    color: "#FF9E00"
                },
                {
                    name: "Союз-ФГ",
                    female: 0,
                    color: "#0E51A7"
                },
                {
                    name: "Рокот",
                    female: 0,
                    color: "#00A67C"
                },
                {
                    name: "Союз-2.1в",
                    female: 0,
                    color: "#7608AA"
                },
            ]
        }
    }

    render() {
        const { launches } = this.props;
        const { launchVehicle } = this.state;
        let tempLaunchVehicle = launchVehicle;
        console.log(launches);
        if (tempLaunchVehicle[0].female === 0) {
            launches.forEach((item, index) => {
                if (item.launch_vehicle.name === tempLaunchVehicle[0].name) {
                    tempLaunchVehicle[0].female++;
                } else if (item.launch_vehicle.name === tempLaunchVehicle[1].name) {
                    tempLaunchVehicle[1].female++;
                } else if (item.launch_vehicle.name === tempLaunchVehicle[2].name) {
                    tempLaunchVehicle[2].female++;
                } else if (item.launch_vehicle.name === tempLaunchVehicle[3].name) {
                    tempLaunchVehicle[3].female++;
                } else if (item.launch_vehicle.name === tempLaunchVehicle[4].name) {
                    tempLaunchVehicle[4].female++;
                }
            });
            this.setState({launchVehicle: tempLaunchVehicle});
        }

        return (
            <div >
                <h1 style={{color: "white", textAlign: "center"}}>Количество определенных ракетоносителей запушенных Роскосмосом</h1>
                {launchVehicle[0].female !== 0 && (
                    <BarChart
                        style={{ margin: "0 auto"}}
                        width={600}
                        height={400}
                        data={launchVehicle}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {
                                launchVehicle.map((item, index) => (
                                    <Cell key={`cell-${index}`} fill={item.color} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                )}
            </div>

        );
    }
}
