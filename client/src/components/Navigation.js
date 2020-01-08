import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props)

    // this.state = {
    //   hidden: true
    // }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ hidden: nextProps.navOpen });
  // }



  render() {

    //Sets class name for actual nav bar
    let classChange = this.props.navOpen ? 'uk-offcanvas uk-open' : 'uk-offcanvas';
    let hideBtn = this.props.navOpen ? true : false;

  return <div>
          <button href="#offcanvas-slide" className="uk-button uk-button-default" uk-toggle='true' hidden={hideBtn}
          onClick={this.props.toggleNavBar}>
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
}

export default Nav;