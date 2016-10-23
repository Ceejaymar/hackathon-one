import React from 'react';
import GoogleMap from './googleMap'

const Map = React.createClass({
  getInitialState: function () {
    return (
      {term: ''}
    )
  },
  submitInfo: function (event) {
    event.preventDefault()
    console.log(this.state.term)
  },
  inputChange: function(e){
      this.setState(
        {term: e.target.value}
      )
  },
  render: function(){
    return (
      <section id="map" className="mapSection">
        <div className="mapContent">
          <h1>Ice Cream Shops</h1>
          <p>Is it too cold for the Trucks to be out? Or maybe all the trucks unavailable. Find the closest Icecream shp near you! Enter your zip code below.</p>
          <div className="mapSearchGroup">
            <form onSubmit={this.submitInfo}>
              <input onChange={this.inputChange} value={this.state.term} placeholder="zipcode"/>
              <button type="Submit">Search</button>
            </form>
          </div>
        </div>
        <div className="mapGoogle">

            <GoogleMap place={this.state.term} />

        </div>
      </section>
    )
  }
})


export default Map;
