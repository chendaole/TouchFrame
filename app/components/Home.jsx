import React from 'react';
import {Container, View} from 'amazeui-touch';

import './Home.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                 <Container
                    transition = 'rfl'>
                    <h1>主页</h1>
                    <h2>测试</h2>
                    <h2>测试</h2>
                    <h2>测试</h2>
                    <h2>测试</h2>
                    <h2>测试</h2>
                    <h2>测试</h2>
                </Container>
        );
    }
}