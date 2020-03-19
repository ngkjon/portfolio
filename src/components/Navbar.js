import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import logo from '../resources/logo.png'


class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>
            <ul>
                {/* <li><Link
                    className='link'
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                ><img class='jnlogo' src={logo}></img></Link></li> */}
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >about</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >projects</Link></li>
                <li><a
                    className='link'
                    activeClass="active"
                    href="https://www.dropbox.com/s/uhxfgsk108odrl5/design3B.pdf"
                    target="_blank"
                >resume</a></li>
                {/* <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li> */}
            </ul>
        </nav> );
    }
}
 
export default Navbar;