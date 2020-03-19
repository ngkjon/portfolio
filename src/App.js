import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import Header from './components/Header';
// import About from './components/About';
// import Work from './components/work';
// import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Train from './components/projects/Train'
import DailyUI from './components/projects/DailyUI'
import Personas from './components/projects/Persona'
import Trivia from './components/projects/Trivia'



function App() {
  return (
    <BrowserRouter>
        <div className="mainpage">
          {/* <Navbar /> */}
            <Switch>
             <Route path="/" component={Main} exact/>
             <Route path="/train" component={Train} exact/>
             <Route path="/daily" component={DailyUI} exact/>
             <Route path="/personas" component={Personas} exact/>
             <Route path="/trivia" component={Trivia} exact/>



             <Route component={Main} exact/>


           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
