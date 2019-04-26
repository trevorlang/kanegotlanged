import React, { Component } from 'react';
import { Link } from 'gatsby';
import { stack as Menu } from 'react-burger-menu';

class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  handleCloseMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link to="/" onClick={this.handleCloseMenu}>
          Home
        </Link>
        <Link to="/our-story" onClick={this.handleCloseMenu}>
          Our Story
        </Link>
        <Link to="/wedding-details" onClick={this.handleCloseMenu}>
          Wedding Details
        </Link>
        <Link to="/wedding-party" onClick={this.handleCloseMenu}>
          Wedding Party
        </Link>
        <Link to="/accomodations-travel" onClick={this.handleCloseMenu}>
          Accomodations &amp; Travel
        </Link>
        <Link to="/registry" onClick={this.handleCloseMenu}>
          Registry
        </Link>
      </Menu>
    );
  }
}

export default MobileNav;
