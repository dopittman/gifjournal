import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Nav = (props) => {

    //Sets class name for actual nav bar
    let classChange = props.navOpen ? 'uk-offcanvas uk-open' : 'uk-offcanvas';
    let hideBtn = props.navOpen ? true : false;

  return <div>
          <button href="#offcanvas-slide" className="uk-button uk-button-default" uk-toggle='true' hidden={hideBtn}
          aria-hidden={hideBtn} onClick={props.toggleNavBar}>
            <span>Open</span>
          </button>

  <div id="offcanvas-slide" uk-offcanvas='true' className={classChange} style={{display: 'block'}}>
      <div className="uk-offcanvas-bar">
          <ul className="uk-nav uk-nav-default">
          <span className='Nav-Close-Btn' onClick={props.toggleNavBar}>X</span>
          <br />
              <li className="uk-active"><a href="#22">Active</a></li>
              <li><a href="">Item</a></li>
              <li className="uk-nav-header">Header</li>
              <li><a href="#2">Item</a></li>
              <li><a href="#3">Item</a></li>
              <li className="uk-nav-divider"></li>
              <li><a href="#4">Item</a></li>
          </ul>

      </div>
    </div>
  </div>
  }

export default Nav;