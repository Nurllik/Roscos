import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, {PureComponent} from "react";
import { Carousel } from "react-responsive-carousel";
import {getLaunchVehicle} from "../requestService";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Angara12 from './images/vehicles/angara1.2.jpg';
import Angara5 from './images/vehicles/angara-a5.jpg';
import ProtonM from './images/vehicles/proton-m.jpg';
import Rokot from './images/vehicles/rokot.jpg';
import Souz21 from './images/vehicles/souz2.1a.jpg';
import Souz21b from './images/vehicles/souz2.1b.jpg';
import Souz21v from './images/vehicles/souz2.1v.jpg';
import Souz2 from './images/vehicles/souz2.jpg';
import SouzFG from './images/vehicles/souz-fg.jpg';
import SouzSTA from './images/vehicles/souz-sta.jpg';
import SouzSTB from './images/vehicles/souz-stb.jpg';
import './style.css';

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

        const getImage = (type) => {
            console.log()
            switch (type) {
                case 1: return Angara12;
                case 2: return Angara5;
                case 3: return ProtonM;
                case 4: return Souz2;
                case 5: return Souz21;
                case 6: return Souz21b;
                case 7: return Souz21v;
                case 8: return SouzSTA;
                case 9: return SouzSTB;
                case 10: return SouzFG;
                case 11: return Rokot;
            }
        }

        return (
            <div >
                <Carousel >
                    {launchVehicles.map(item => {
                        return (
                            <>
                                <img src={getImage(item.id)} style={{  }} />
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                                    <h2 style={{ color: "white", marginTop: "10px"}}>{item.name}</h2>
                                    <ul style={{ paddingLeft: "20px", margin: "0", listStyle: "none" }}>
                                        <li>Длина: {item.length}</li>
                                        <li>Диаметр: {item.diameter}</li>
                                        <li>Стартовая масса: {item.start_mass}</li>
                                        <li>Производитель: {item.manufacturer}</li>
                                        <li>Тип топлива: {item.fuel_type}</li>
                                    </ul>
                                    <div>
                                        <h3 style={{ color: "white", paddingTop: "10px"}}>Описание</h3>
                                        <p className="description" style={{ textAlign: "start", lineHeight: 1}}>{item.description}</p>
                                    </div>
                                </div>
                            </>
                          )})}
                </Carousel>
            </div>
        )
    }
}
