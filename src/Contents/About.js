import React, { Component } from 'react';
import CarouselComponent from '../Components/Carousel';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h3>Hi there,</h3>
                <h3>I'm Helena</h3>

                <br></br>
                <p> I'm curently studying how to code at Nucamp Bootcamp and I want to became a Full Stack Developer.
                I have experience from technical recruiting, from managmenent roles and software has been always
                    important part in my working/personal life and as I'm curious person I want to figure out.</p>
                <p><strong>"How to crack the code of coding"</strong></p>
                <br />
                <CarouselComponent />
            </div >
        )
    }
}
export default About