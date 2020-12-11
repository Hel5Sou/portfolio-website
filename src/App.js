import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Contents/Home";
import About from "./Contents/About";
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Contact from './Contents/Contact';
import TodoApp from './Contents/Todo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/todo">
          <TodoApp />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  )
}

export default App;
