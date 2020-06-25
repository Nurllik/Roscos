import React, { Component, PureComponent } from 'react'
import 'antd/dist/antd.css'
import './index.css'
import {Layout, Menu, Breadcrumb, Button, Tabs} from 'antd'
import StackedBarChart from '../component/recharts/StackedBarChart'
import CustomShapeBarChar from '../component/recharts/CustomShapeBarChart'
import PieChartW from '../component/recharts/PieChartW'
import {
    LoadingOutlined,
} from '@ant-design/icons';
import './index.css';
import {getLaunches, getSpacestation} from "../requestService";
import LaunchVehicle from "../component/recharts/launchVehicle";
import CardContainer from "../component/CardContainer";
import ISSBlock from "../component/issBlock";
import ISSImage from "../component/images/ISS.jpg";
import secondBack from "../component/images/second-block.jpg";
import firstBack from "../component/images/firstBack.jpg";

const { TabPane } = Tabs;

const { Header, Content, Footer } = Layout;

class LayoutMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            launches: null,
            spacestation: null
        }
    }

    componentDidMount() {
        getLaunches().then(response => this.setState({ launches: response.data}));
        getSpacestation().then(response => this.setState({ spacestation: response.data[0] }));
    }

    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {
        const { launches, spacestation } = this.state
        return (
            <>
                {launches ? (
                  <div>
                    <Layout >
                        <div className="first-block" style={{ backgroundImage: `url(${firstBack})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "60px" }}>
                            <Content className="content" >
                                <Tabs type="card">
                                    <TabPane tab="Запуски по космодромам" key="1">
                                        <div className="wrapper__tab">
                                            <PieChartW  launches={launches}/>
                                            <p style={{color: "white", margin: "25px 10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi est facere fugiate!</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Производители ракетоносителей" key="2">
                                        <div className="wrapper__tab">
                                            <CustomShapeBarChar launches={launches} />
                                            <p style={{color: "white", margin: "25px 10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi est facere fugiate!</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Прошедшие запуски" key="3">
                                        <div className="wrapper__tab">
                                            <StackedBarChart launches={launches} />
                                            <p style={{color: "white", margin: "25px 10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi est facere fugiate!</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Ракетоносители" key="4">
                                        <div className="wrapper__tab">
                                            <LaunchVehicle launches={launches} />
                                            <p style={{color: "white", margin: "25px 10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi est facere fugiate!</p>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </Content>
                        </div>

                        <div className="second-block" style={{ backgroundImage: `url(${secondBack})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
                            <Content className="content" >
                                <CardContainer />
                            </Content>
                        </div>

                        <div className="third-block" style={{ backgroundImage: `url(${ISSImage})`, height: "90vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "20px" }}>
                            <Content className="content" >
                                <ISSBlock spacestation={spacestation} />
                            </Content>
                        </div>


                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </div>) :
                    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                    <LoadingOutlined style={{ fontSize: '100px' }} /></div>)}
            </>
        )
    }
}

export default LayoutMain
