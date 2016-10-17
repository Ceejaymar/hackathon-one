import React from 'react';

const About = React.createClass({
  render: function(){
    return (
      <section id="about" className="aboutSection">
        <div className="aboutInfo">
          <h1>Find my ice cream</h1>
          <p>	Selvage offal ethical, health goth pok pok hella keffiyeh organic portland cold-pressed skateboard meditation raclette schlitz.  Williamsburg umami wolf keffiyeh poutine biodiesel.  Schlitz beard retro, hell of 3 wolf moon organic ugh four loko.  Small batch fap echo park blog.  Everyday carry street art single-origin coffee, semiotics brooklyn normcore mumblecore flannel asymmetrical bitters meditation raclette.  Tattooed readymade ennui normcore, ramps listicle vice pickled lumbersexual.  Mixtape tilde banjo try-hard VHS raclette, typewriter fingerstache ennui organic enamel pin cold-pressed.</p>
          <div className="buttonContainer">
            <button className="blogButton">Our Blog</button>
            <button className="downloadButton">Download</button>
          </div>
        </div>
      </section>
    )
  }
})


export default About;
