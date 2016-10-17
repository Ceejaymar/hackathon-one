import React from 'react';

const Navbar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-fixed-top " >
        <a className="navbar-brand">isee</a>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#map">Map</a></li>
          <li className="nav-item"><a className="nav-link" href="#download">Download</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
})

export default Navbar
