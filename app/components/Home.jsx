import React from 'react';

import netData from '../common/netData.jsx';
import {Container, Slider ,Group, Card} from 'amazeui-touch';

import './Home.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            homeSlideData: [],
            homeCardsData:[]
        }
    }

    componentWillMount(){
        netData.getHomeSlideData().then(homeSlideData =>{
            this.setState({homeSlideData : homeSlideData},()=>{
                netData.getHomeCardsData().then(result => {
                    console.log(result.rows);
                    this.setState({homeCardsData: result.rows});
                })
            });
        })
    }

    renderNewsCard(){
        const {homeCardsData} = this.state;
        const footer = (
            <Card.Child role="footer">
                <a href="javascript: void(0)">Like</a>
                <a href="javascript: void(0)">Comment</a>
                <a href="javascript: void(0)">ReadMore</a>
            </Card.Child>
        );

        return homeCardsData.map((item,i) =>{
            return(
                <Card
                    key={i}
                    title={item.value.title}
                    footer={footer}>
                    <p>{item.value.content}</p>
                </Card>
            );
        });
    }

    renderSlider(){
        const {homeSlideData} = this.state;
        return(
            <Slider>
                {homeSlideData.map((item,i) => {
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
            <div>
                <Container
                    className="Home"
                    scrollable={true}>
                    <Group className="Slide">
                        {this.renderSlider()}
                    </Group>
                    {this.renderNewsCard()}
                </Container>
            </div>
        );
    }
}