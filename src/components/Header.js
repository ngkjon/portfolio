import React, { Component } from 'react';
import { Fade, Rotate } from 'react-awesome-reveal';
import data from '../yourdata';
import Social from './social.js';
import VizImg from './VizImg.js';
import './animations.css'
import leaf from '../resources/leaf.svg';

class Header extends Component {
    state = {}

    render() {
        return (<div>
        <Rotate cascade direction={"bottom-left"} duration={800}>
        <VizImg className= 'leaf' src={leaf}></VizImg>
        </Rotate>

        <h1 className='heading-background'>{data.headerText}</h1>
            <header>
                <h1>
                    </h1>
            </header>

            <Fade bottom cascade duration={800}>

            <p className='header-title'>
                <br></br>
                {/* <br></br> */}
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                <Social></Social>
                    {/* <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button> */}
                </p>
            </Fade>



        </div>);
    }
}

export default Header;