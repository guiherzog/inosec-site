import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.jpg';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  state = {
      menuActive: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="Inova Securitizadora Logo" src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Inova Securitizadora Logo Mobile" src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
