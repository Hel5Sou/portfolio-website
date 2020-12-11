import React, { Component } from 'react';
import Navitem from './NavItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 'NavItemActive': '' }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    /*in the <Navitem> component, added a new prop “activec” which will send the “activeitem()” 
    function/method to Navitem component which will be then called whenever a Navitem is click*/

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                    <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                    <Navitem item="ToDo" tolink="/todo" activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}
export default Navbar