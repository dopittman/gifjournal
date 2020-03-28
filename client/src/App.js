import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './App.css';
import FormTest from './components/FormTest';
import Nav from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard';



class App extends React.Component { 
  constructor(){
    super();

    this.state = {
      navOpen: false
    }

    this.toggleNavBar = this.toggleNavBar.bind(this)
  }

  toggleNavBar(){
    if(this.state.navOpen === false){
    this.setState({navOpen: true})} else {
      this.setState({navOpen: false});
    }
  };

  render() {

    return <div className="App">

        <Nav
          navOpen = { this.state.navOpen }
          toggleNavBar = { this.toggleNavBar }
        />

      {/* <FormTest /> */}
      <BrowserRouter>
        <Landing />
        <Dashboard />
      </BrowserRouter>
    </div>
  }
}
export default App;
