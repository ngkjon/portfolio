import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';


class ReturnNavbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav className='returnnav'>
            <ul>

                <li>
                {/* <Link
                    className='link'
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={0}
                    onClick={this.scrollToTop}
                > */}
                 <NavLink to="/">home</NavLink>
                 {/* </Link> */}
                 </li>
                
            </ul>
        </nav> );
    }
}
 
export default ReturnNavbar;