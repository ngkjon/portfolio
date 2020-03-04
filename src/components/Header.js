import React, { Component } from 'react';
import { Fade, Rotate } from 'react-awesome-reveal';
import data from '../yourdata';
import Social from './social.js';
import './animations.css'
class Header extends Component {
    state = {}

    render() {
        return (<div>
        <Rotate cascade direction={"bottom-left"} fraction={1}>
            {/* className='animated rotateInDownLeft leaf' */}
            <img className= 'leaf' src='https://www.dl.dropboxusercontent.com/s/jpjvesl250s19w0/leaf2.png'></img>

        </Rotate>

        <h1 className='heading-background'>{data.headerText}</h1>
            <header>
                <h1>
                    </h1>
            </header>

            <Fade>

            <p className='header-title'>
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