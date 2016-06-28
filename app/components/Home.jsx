import React from 'react';

import netData from '../common/netData.jsx';
import {Container, Slider ,Group, Card} from 'amazeui-touch';

import './Home.css';

const CardData = [
    {
        title:'测试1',
        content:'测试测试测试测试测试'
    },
    {
        title:'测试2',
        content:'测试测试测试测试测试'
    },
    {
        title:'测试3',
        content:'测试测试测试测试测试'
    },{
        title:'测试4',
        content:'测试测试测试测试测试'
    },
    {
        title:'测试5',
        content:'测试测试测试测试测试'
    },
    {
        title:'测试6',
        content:'测试测试测试测试测试'
    }
];

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            homeData: []
        }
    }

    componentWillMount(){
        netData.getHomeSlideData().then(homeData =>{
            this.setState({homeData : homeData});
        })
    }

    renderNewsCard(){
        const footer = (
            <Card.Child role="footer">
                <a href="javascript: void(0)">Like</a>
                <a href="javascript: void(0)">Comment</a>
                <a href="javascript: void(0)">ReadMore</a>
            </Card.Child>
        );

        return CardData.map((item,i) =>{
            return(
                <Card
                    key={i}
                    title={item.title}
                    footer={footer}>
                    <p>{item.content}</p>
                </Card>
            );
        });
    }

    renderSlider(){
        const {homeData} = this.state;
        return(
            <Slider>
                {homeData.map((item,i) => {
                    return(
                        <Slider.Item
                            key={i}
                            thumbnail={item.thumb}>
                            <img src={item.img}/>
                        </Slider.Item>
                        );
                    })}
            </Slider>
        );

    }

    render(){
        return(
                 <Container
                     className="Home"
                     scrollable={true}>
                     <Group className="Slide">
                        {this.renderSlider()}
                     </Group>
                     {this.renderNewsCard()}
                </Container>
        );
    }
}