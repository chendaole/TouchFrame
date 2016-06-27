import React from 'react';
import {Container, Slider ,Group} from 'amazeui-touch';

import './Home.css';

const data = [
    {
        thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
        img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
    },
    {
        thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
        img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
    },
    {
        thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
        img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
    },
    {
        thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
        img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
    }];

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    renderSlider(){
        return(
            <Slider>
                {data.map((item,i) => {
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
                    transition = 'rfl'>
                    <Group>
                        {this.renderSlider()}
                    </Group>
                </Container>
        );
    }
}