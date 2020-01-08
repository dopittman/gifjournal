import React from 'react';
import FormTest from './components/FormTest';
import Nav from './components/Navigation/Navigation'
// import '../node_modules/uikit/dist/css/uikit.css';
// import '../node_modules/uikit/dist/js/uikit';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import OutsideClicked from './components/OutsideClicked';



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
      <OutsideClicked
        navOpen = { this.state.navOpen }
        toggleNavBar = { this.toggleNavBar }
      >
        <Nav
          navOpen = { this.state.navOpen }
          toggleNavBar = { this.toggleNavBar }
        />
      </OutsideClicked>

      <Dashboard />
      <FormTest />
    </div>
  }
}
export default App;
