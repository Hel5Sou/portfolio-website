import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Helena.png';
import Social from '../Components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['Hi, I am Helena', 'I am learning how to code!']} speed={75} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home