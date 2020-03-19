
import React from 'react';

import Header from './Header';
import About from './About';
import Work from './work';
import Contact from './Contact';
import Navbar from './Navbar'


const Main = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
      
        <div className="App">
        <Navbar></Navbar>
        <div className="App-header">
        <Header></Header>
        </div>
        
        <div className='About'>
          <About></About>
        </div>
        <div className='work'>
          <Work></Work>
        </div>
        {/* <div className='contact'>
          <Contact></Contact>
        </div> */}
      </div>
    );
}
 
// export default home;
// function App() {
//   return (

//   );
// }

export default Main;
