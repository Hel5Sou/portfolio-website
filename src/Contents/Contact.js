import React, { Component } from 'react';
import Social from '../Components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <li>Email: <a className="email" href="mailto:helena.soukupova5@gmail.com">helena.soukupova5@gmail.com</a></li>

                <Social />
            </div>
        )
    }
}
export default Contact