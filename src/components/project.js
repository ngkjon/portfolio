import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url} className='project-details'>
            <img src={this.props.imageSrc} alt={this.props.title} ></img>
            
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
            </a>
        </div> 
            </Fade>);
    }
}
 
export default Project;