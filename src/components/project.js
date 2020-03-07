import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <a href={this.props.url} className='project-details'>

        <div className='project' >
            <img className='projimg' src={this.props.imageSrc} alt={this.props.title}></img>
            
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
        </div> 
        </a>

            </Fade>);
    }
}
 
export default Project;