import React,{Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';

const {Header, Footer, Sider, Content} = Layout;

class IndexLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{minHeight:'100vh'}}>
                    <div style={{height:'64px',backgroundColor:'yellow',textAlign:'center'}}>this is logo</div>
                    <Menu theme='dark' mode='inline'>
                        <Menu.Item key={0}><Link to="/hello"><Icon type='home' />主页</Link></Menu.Item>
                        <Menu.SubMenu title={<span><Icon type='dashboard'/>Dashboard</span>}>
                            <Menu.Item key={1}><Link to="/first"><Icon type='home' />第一个页面</Link></Menu.Item>
                            <Menu.Item key={2}><Link to="/second"><Icon type='pie-chart'/>第二个页面</Link></Menu.Item>
                            <Menu.Item key={3}><Link to="/third"><Icon type='pie-chart'/>第三个页面</Link></Menu.Item>
                            <Menu.Item key={4}><Link to="/card"><Icon type='pie-chart'/>卡片</Link></Menu.Item>
                            <Menu.Item key={5}><Link to="/card2"><Icon type='pie-chart'/>卡片2</Link></Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor:'#fff'}}>fadf</Header>
                    <Content style={{margin:'10px 6px 5px 9px', backgroundColor:'#B0C4DE'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{backgroundColor: '#9370DB',color:'red'}}>copy right</Footer>
                </Layout>
                
            </Layout>
        )
    }
}

export default IndexLayout;