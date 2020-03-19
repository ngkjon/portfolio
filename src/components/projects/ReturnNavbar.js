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
                 <NavLink to="/">home</NavLink></li>
                
            </ul>
        </nav> );
    }
}
 
export default ReturnNavbar;