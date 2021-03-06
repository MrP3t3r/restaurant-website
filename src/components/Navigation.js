import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import Header from './Header';
import MenuHeader from './MenuHeader';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  handleClickOutside = evt => {
    this.setState({
      isOpen: false
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const gallery = () => {
      return(
        <MenuHeader
          current="Galeria"
        />
      );
    };
    const about = () => {
      return(
        <MenuHeader
          current="Rolunk"
        />
      );
    };
    let styler = classnames('');
    return (
      <div>
      <Navbar fixed={`top`} inverse toggleable={"sm"} className={"navfix bg-brown"} >
          <NavbarToggler right onClick={this.toggle} className=""/>
          <NavbarBrand className={'mx-auto'}><br /><div className="text-center logo">
            <img className="logoImg" src={process.env.PUBLIC_URL + "/pictures/brand/brand.png"} alt="B54 Cafe, Bistro & Bakery"/>
          </div></NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar className={"toggler "}>
            <Nav className="ml-auto" navbar>
              <div className="static">
                <NavItem>
                  <NavLink to={process.env.PUBLIC_URL+'/'} exact activeClassName="active" tag={RRNavLink}>Főoldal</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={process.env.PUBLIC_URL+'/Rolunk'} className={styler} activeClassName="active" tag={RRNavLink}>Rólunk</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={process.env.PUBLIC_URL+'/Galeria'} className={styler} activeClassName="active" tag={RRNavLink}>Galéria</NavLink>
                </NavItem>
              </div>
              {Object.keys(this.props.meals).map((types, index) =>
                <NavItem key={types+index}>
                  <NavLink
                    to={process.env.PUBLIC_URL+'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className={styler} activeClassName="active" tag={RRNavLink}>
                    {types}
                  </NavLink>
                </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
        <div className="navline"></div>
        <div className="navfix">
          <Switch>
  					<Route exact path={process.env.PUBLIC_URL+"/"} component={ Header } />
  					<Route path={process.env.PUBLIC_URL+"/Rolunk"} component={ about } />
            <Route path={process.env.PUBLIC_URL+"/Galeria"} component={ gallery } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Navigation);
