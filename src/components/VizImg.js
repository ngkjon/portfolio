import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
// import { Fade, Rotate } from 'react-awesome-reveal';



class VizImg extends Component {
    state = {
        imgViz: false
    }
    render() { 
        return (  
        <VizSensor
            onChange={(isVisible) => {
              this.setState({imgViz: isVisible})
            }}
          >
          {/* <Rotate cascade direction={"bottom-left"} duration={800}> */}

            <img
              className={this.props.className}
              src={this.props.src}
              style={{
                opacity: this.state.imgViz ? 1 : 0,
                transition: 'opacity 1000ms linear'
              }}
            />
            {/* </Rotate>  */}
        </VizSensor>);
    }
}
 
export default VizImg;