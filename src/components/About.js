import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import data from '../yourdata';
import pic from '../resources/pic3.png';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade duration={200}>about</Fade></h1>
            <Fade bottom duration={500}>
                    <p id='description'>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={pic} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;