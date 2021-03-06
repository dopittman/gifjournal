import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import Nav from './components/Navigation/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import CreateLog from './components/Pages/CreateLog';
import Landing from './components/Landing/Landing';
import Navbar from './components/AuthComponents/navbar';



class App extends React.Component { 
  constructor(){
    super();

  };

  render() {

    return <div className= "App" >

        <div className = "navigation-bar" >
        <Nav />
        </div>

      <BrowserRouter>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Create">Create</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Landing">Landing</Link>
        </li>
        
      </ul>

      <Switch>
      <Route path="/Create">
          <CreateLog />
        </Route>
        <Route path="/Dashboard" >
          <Dashboard />
        </Route>
        <Route path="/Landing" >
          <Landing />
        </Route>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  }
}
export default App;
