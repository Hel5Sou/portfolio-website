import React, { Component } from 'react'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'REACT JS', 'REACT - NATIVE', 'GITHUB'],
            'nontech': ['Management', 'Technical Recruiting', 'Team-leadership', 'Planning', 'Performance Management']
        };
    }
    render() {
        let i = 1;
        return (
            <div className="condiv skills">
                <h1 className="subtopic" >My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li key={i++}>{value}</li> // the key iteration is everytime with new element growing up - every element will get increasing value based on it - using key is a good behavior 
                    })}
                </ul>
                <h1 className="subtopic" >My non-technical Skills</h1>
                <ul>
                    {this.state.nontech.map((value) => {
                        return <li key={i++}>{value}</li>
                    })}
                </ul>
            </div>

        )
    }
}
export default Skills