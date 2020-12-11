import React, { Component } from 'react';
import Widecard from '../Components/Widecard';



class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Full Stack Developer" where="Nucamp Bootcam" from="2020" to="2020" country="USA" />
                <Widecard title="Master of Legal Sciences" where="West Bohemia University" from="2000" to="2005" country="Czech Republic" />
                <Widecard title="Master of Teaching Sciences" where="West Bohemia University" from="1997" to="2001" country="Czech Republic" />
                <h1 className="subtopic">Personal development</h1>
                <Widecard title="JavaScript Tutorial" where="SoLoLearn" from="2018" to="2018" country="USA" />
                <Widecard title="Talent Sourcing and Recruiting" where="LinkedIn" from="2018" to="2018" country="USA" />
                <Widecard title="Predictive Index" where="Predictive Index" from="2020" to="2020" country="USA" />
                <br />
            </div>
        )
    }
}
export default Education