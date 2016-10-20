import React from 'react';
import ReactDOM from 'react-dom';

//components
import Navbar from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Quote from './components/quote';
import Map from './components/map';
import Download from './components/download'
import Contact from './components/contact';
import Footer from './components/footer';

//css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Quote />
        <Map />
        <Download />
        <Contact />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
