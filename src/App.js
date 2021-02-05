import React from 'react';
import reactDOM from 'react-dom';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


const App = () => {
  return (
<Router>
  <Navbar />
  <Switch>
    <Route exact path='/about'>
      <About />
    </Route>
    <Route exact path='/contact'>
      <Contact />
    </Route>
    <Route exact path='/'>
      <Home />
    </Route>
  </Switch>
</Router>
  )
}

reactDOM.render(<App />, document.getElementById('root'))