import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, {PureComponent} from "react";
import {getLaunchVehicle} from "../requestService";

const { Meta } = Card;

export default class CardContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            launchVehicles: []
        }
    }

    componentDidMount() {
        getLaunchVehicle().then(response => this.setState({ launchVehicles: response.data }));
    }

    render () {
        const { launchVehicles } = this.state;

        return (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {launchVehicles.map(item => {
                    return (
                        <Card
                            style={{flexBasis: "27%", margin: "15px", display: "inline-flex", flexDirection: "column"}}
                            cover={
                                <img
                                    alt="example"
                                    src={item.image}
                                />
                            }
                        >
                            <Meta
                            title={item.name}
                        />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                            <ul style={{ paddingLeft: "20px", margin: "15px 0" }}>
                                <li>Название: {item.name}</li>
                                <li>Длина: {item.length}</li>
                                <li>Диаметр: {item.diameter}</li>
                                <li>Стартовая масса: {item.start_mass}</li>
                                <li>Производитель: {item.manufacturer}</li>
                                <li>Тип топлива: {item.fuel_type}</li>
                            </ul>
                            <div>
                                <h3>Описание</h3>
                                <p className="description" style={{ maxHeight: "200px", overflow: "auto"}}>{item.description}</p>
                            </div>
                        </div>
                        </Card>
                    )
                })}

            </div>

        )
    }
}
