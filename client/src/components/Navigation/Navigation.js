import React from 'react';

const Nav = (props) => {

    //Sets class name for actual nav bar
    let classChange = props.navOpen ? 'uk-offcanvas uk-open' : 'uk-offcanvas';
    let hideBtn = props.navOpen ? true : false;

  return <div>
          <button href="#offcanvas-slide" className="uk-button uk-button-default" uk-toggle='true' hidden={hideBtn}
          onClick={props.toggleNavBar}>
            <span>Open</span>
          </button>

  <div id="offcanvas-slide" uk-offcanvas='true' className={classChange} style={{display: 'block'}}>
      <div className="uk-offcanvas-bar">
          <ul className="uk-nav uk-nav-default">
              <li className="uk-active"><a href="#22">Active</a></li>
              <li><a href="#1">Item</a></li>
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