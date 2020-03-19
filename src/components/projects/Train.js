
import React from 'react';
import '../../App.css';
import { Fade } from 'react-awesome-reveal';


import ReturnNavbar from './ReturnNavbar'


const Train = () => {
    return (
        <div className="projbody">
        <ReturnNavbar/>
        <h1 className='heading'>
        <Fade bottom cascade delay={200} duration={200}>train telemetry</Fade></h1>
        <Fade bottom cascade duration={2000}></Fade>
        <img src='https://www.dl.dropboxusercontent.com/s/ty655vx476po0fv/trains.png?dl=0'></img>
        <p>
        With companies realizing the value of their data, there is a push towards data-centric systems that enable large scale collection and analysis of customer and employee interactions. These business insights give the company power to strive to make changes that positively impact both the company and its customers with the ability to optimize costs along the way. VIA Rail follows this in that it is actively trying to make data-driven decisions to innovate and enhance client experience.  The company manages many streams of data internally, looking from passenger travel data to on-board train car data which is soon to roll out for production. The data allows for predictions based on recognized trends, and insights into key values of employees and customers.        </p>
        <a href='https://www.dropbox.com/s/1s368cvq4mlw6hb/WKRPT300.pdf?dl=0'>read more</a>
      </div>
    );
}
 
// export default home;
// function App() {
//   return (

//   );
// }

export default Train;
