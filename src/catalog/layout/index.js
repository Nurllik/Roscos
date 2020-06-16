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
import moment from 'moment'
import './index.css';

const { TabPane } = Tabs;



// import Example from '../component/MixBarChart'

const { Header, Content, Footer } = Layout;
const urlForLaunches = 'http://roscosmos.xyz/api/launches/?format=json'

class LayoutMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            launches: null
        }
    }

    fetchlaunches(url) {
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({ launches: res }))
    }
    componentDidMount() {
        this.fetchlaunches(urlForLaunches)
    }



    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {
        const { launches } = this.state
        if (launches) {

            return (
                <div>
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
                                <TabPane tab="Прошедшие запуски" key="1">
                                    <div className="wrapper__tab">
                                        <StackedBarChart launches={launches} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Запуски по странам" key="2">
                                    <div className="wrapper__tab">
                                        <CustomShapeBarChar />
                                    </div>
                                </TabPane>
                                <TabPane tab="Запуски по космодромам" key="3">
                                    <div className="wrapper__tab">
                                        <PieChartW  launches={launches}/>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </div>
            )
        } else { return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <LoadingOutlined style={{ fontSize: '100px' }} /></div>) }

    }
}

export default LayoutMain
