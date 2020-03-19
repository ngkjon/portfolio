import React, { Component } from 'react';
import Day from './day';
import { Fade } from 'react-awesome-reveal';
import data from './dailydata';
import ReturnNavbar from './ReturnNavbar'

// class DailyUI extends Component {
    const DailyUI = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);

    // render() { 

        return (
        <div className='work day'>
        <ReturnNavbar/>
        <h1 className='heading'>
        <Fade bottom cascade delay={200} duration={200}>daily ui</Fade></h1>
        <Fade bottom cascade duration={2000}>

        <div className='work-content'>
            
                {data.day.map((day)=>(
                    <Day key={day.id}
                             title = {day.title}
                             service = {day.service}
                             imageSrc = {day.imageSrc}
                     ></Day>
                ))}
        </div>
                </Fade>
        </div>  );
    // }
}
 
export default DailyUI;