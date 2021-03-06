import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
            {/* if (this.props.page=''){<NavLink to={"/" + this.props.page}>:<a href={this.props.url} className='project-details'>} */}
       <NavLink to={"/" + this.props.page}>

        <div className='project' >
            <img className='projimg' src={this.props.imageSrc} alt={this.props.title}></img>
            
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
        </div> 
        {/* </a> */}
        </NavLink>

            </Fade>);
    }
}
 
export default Project;