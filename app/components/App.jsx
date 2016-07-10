import React from 'react';
import { Container ,TabBar, NavBar, OffCanvas , OffCanvasTrigger} from 'amazeui-touch';

import LeftTab from './LefTab.jsx';
import Home from './Home.jsx';
import Person from './Person.jsx';

import './App.css';

const NavBarTitle = {
    home : '主页',
    person :'私人',
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
        const content= tab === 'home' ? <Home/> : <Person/>;

        const NavBarWithCanvas = {
            title : NavBarTitle[tab],
            leftNav  : [{
                icon : 'bars',
                component : OffCanvasTrigger,
                isClone : true,
                offCanvas : <OffCanvas><LeftTab/></OffCanvas>
            }]

        };

        return(
            <Container className="ContainerStyle">
                <Container style={{ background : 'white' }}>
                    <Container className = 'header'>
                        <NavBar
                            className="NavBarStyle"
                            {...NavBarWithCanvas}
                            amStyle="primary"/>
                    </Container>
                    <Container className="body" fill>
                        {content}
                    </Container>
                    <Container className="footer">
                        <TabBar
                            amStyle="primary"
                            onAction={this.handleClickTabBar.bind(this)}>
                            <TabBar.Item
                                className="TabBarStyle"
                                eventKey = "home"
                                active = {this.state.tab === 'home'}
                                icon = 'home'
                                title = {NavBarTitle.home}
                            />
                            <TabBar.Item
                                eventKey = 'gear'
                                active = {this.state.tab === 'gear'}
                                icon = 'gear'
                                title = {NavBarTitle.person}
                            />
                            <TabBar.Item
                                eventKey = 'info'
                                active = {this.state.tab === 'info'}
                                icon="info"
                                title={NavBarTitle.info}
                                badge={7}/>
                        </TabBar>
                    </Container>
                </Container>
            </Container>
        );
    }
}
