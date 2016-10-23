import React from 'react';

const Footer = React.createClass({
  render: function(){
    return (
      <div className="footerMain">
        <div className="footerSection">
          <div className="footerInfo">
            <h1>isee</h1>
            <p>Pop-up banh mi offal normcore.  Copper mug pok pok meggings hoodie lo-fi polaroid flexitarian, fap synth.  Cardigan whatever bushwick, microdosing XOXO tilde poke PBR</p>
            <div>
              {/* <i className="facebook-square"></i> */}
            </div>
          </div>
          <div className="footerLogo">

          </div>
          <div className="footerLinks">
            <ul>
              <li>About</li>
              <li>Map</li>
              <li>Download</li>
              <li>Our Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <hr />
        <div  className="footerBottom">
          <small className="presented">Presented by C4Q</small>
          <small className="copy">isee &copy; 2016</small>
        </div>
      </div>
    )
  }
})

export default Footer;
