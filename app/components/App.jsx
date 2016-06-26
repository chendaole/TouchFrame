import React from 'react';
import { Container ,TabBar, NavBar, OffCanvas , OffCanvasTrigger} from 'amazeui-touch';

import Home from './Home.jsx';

import './App.css';

const NavBarTitle = {
    home : '主页',
    gear :'其他',
    info : '信息'
};

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tab :'home'
        };
    }

    handleClickTabBar(key,e){
        e.preventDefault();
        this.setState({tab : key});
    }

    render(){
        const { tab } = this.state;
        const content= tab === 'home' ? <Home/> : undefined;

        const NavBarWithCanvas = {
            title : NavBarTitle[tab],
            leftNav  : [{
                icon : 'bars',
                component : OffCanvasTrigger,
                isClone : true,
                offCanvas : <OffCanvas><div><h1>测试</h1></div></OffCanvas>
            }]

        };

        return(
            <Container className="ContainerStyle">
                <NavBar
                    className="NavBarStyle"
                    {...NavBarWithCanvas}
                    amStyle="primary"/>
                <div className="Content">
                    {content}
                </div>
                <TabBar
                    amStyle="primary"
                    onAction={this.handleClickTabBar.bind(this)}>
                    <TabBar.Item
                        className="TabBarStyle"
                        eventKey = "home"
                        active = {this.state.tab === 'home'}
                        icon = 'home'
                        title = '首页'
                    />
                    <TabBar.Item
                        eventKey = 'gear'
                        active = {this.state.tab === 'gear'}
                        icon = 'gear'
                        title = '设置'
                    />
                    <TabBar.Item
                        eventKey = 'info'
                        active = {this.state.tab === 'info'}
                        icon="info"
                        title="信息"
                        badge={7}/>
                </TabBar>
            </Container>
        );
    }
}
