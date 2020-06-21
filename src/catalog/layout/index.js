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
import {getLaunches} from "../requestService";
import LaunchVehicle from "../component/recharts/launchVehicle";
import CardContainer from "../component/CardContainer";

const { TabPane } = Tabs;

const { Header, Content, Footer } = Layout;

class LayoutMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            launches: null
        }
    }

    componentDidMount() {
        getLaunches().then(response => this.setState({ launches: response.data}));
    }

    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {
        const { launches } = this.state
        return (
            <>
                {launches ? (<div>
                    <Layout >
                        <Header>
                            <div className="logo" />
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">Привет</Menu.Item>
                                <Menu.Item key="2">Статистика</Menu.Item>
                                <Menu.Item key="3">Запуски</Menu.Item>
                            </Menu>
                        </Header>
                        <div>

                        </div>
                        <Content className="content" >
                            <Tabs type="card">
                                <TabPane tab="Производители ракетоносителей" key="1">
                                    <div className="wrapper__tab">
                                        <CustomShapeBarChar launches={launches} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Прошедшие запуски" key="2">
                                    <div className="wrapper__tab">
                                        <StackedBarChart launches={launches} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Запуски по космодромам" key="3">
                                    <div className="wrapper__tab">
                                        <PieChartW  launches={launches}/>
                                    </div>
                                </TabPane>
                                <TabPane tab="Ракетоносители" key="4">
                                    <div className="wrapper__tab">
                                        <LaunchVehicle launches={launches} />
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Content>
                        <Content className="content" >
                            <CardContainer />
                        </Content>
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
