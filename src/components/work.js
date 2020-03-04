import React, { Component } from 'react';
import Project from './project';
import { Fade } from 'react-awesome-reveal';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
            
        <h1 className='heading'>
        <Fade bottom cascade delay={200} duration={200}>projects</Fade></h1>
        <Fade cascade duration={2000}>

        <div className='work-content'>
            
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
                </Fade>

        </div>  );
    }
}
 
export default Work;