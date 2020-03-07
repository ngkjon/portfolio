import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade duration={200}>about</Fade></h1>
            <Fade bottom cascade duration={500}>
                    <p id='description'>{data.abouttext}</p>
            </Fade>
            </div>
            
                <Fade bottom cascade duration={200}>
                    <img src={data.aboutImage} alt='about iamge'></img>
                </Fade>
            

        </div>  );
    }
}
 
export default About;