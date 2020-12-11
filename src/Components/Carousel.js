import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Html_CSS from '../img/html_CSS.jpg';
import JavaScript from '../img/JavaScript.png';
import RN from '../img/react_native.jpeg';
import R from '../img/reactJS.png'

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img className="image" alt="react-native" src={Html_CSS}></img>
                </div>
                <div>
                    <img className="image" alt="javascript" src={JavaScript}></img>
                </div>
                <div>
                    <img className="image" alt="react" src={RN}></img>
                </div>
                <div>
                    <img className="image" alt="react" src={R}></img>
                </div>
            </Carousel>
        </div>
    );
}
