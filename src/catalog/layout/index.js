import React, { Component, PureComponent } from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import StackedBarChart from '../component/recharts/StackedBarChart'
import CustomShapeBarChar from '../component/recharts/CustomShapeBarChart'
import PieChartW from '../component/recharts/PieChartW'


// import Example from '../component/MixBarChart'

const { Header, Content, Footer } = Layout;


class LayoutMain extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {


        return (
            <div>

                <Layout >
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <div>
                        
                    </div>
                    <Content>

                       <StackedBarChart/>
                       <CustomShapeBarChar/>
                       <PieChartW/>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}

export default LayoutMain