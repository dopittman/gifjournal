import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import Nav from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard';
import CreateLog from './components/Pages/CreateLog'



class App extends React.Component { 
  constructor(){
    super();

    this.state = {
      navOpen: false
    };

    this.toggleNavBar = this.toggleNavBar.bind(this)
  }

  toggleNavBar(){
    if(this.state.navOpen === false){
    this.setState({navOpen: true})} else {
      this.setState({navOpen: false})
    }
  };

  render() {

    return <div className= "App" >

        <div className = "navigation-bar" >
        <Nav
          navOpen = { this.state.navOpen }
          toggleNavBar = { this.toggleNavBar }
        />
        </div>

      {/* <FormTest /> */}
      <BrowserRouter>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Create">Create</Link>
        </li>
      </ul>

      <Switch>
      <Route path="/Create">
          <CreateLog />
        </Route>
        <Route path="/dashboard" >
          <Dashboard />
        </Route>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  }
}
export default App;
