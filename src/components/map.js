import React from 'react';

const Map = React.createClass({
  render: function(){
    return (
      <section id="map" className="mapSection">
        <div className="mapContent">
          <h1>Ice Cream Shops</h1>
          <p>Is it too cold for the Trucks to be out? Or maybe all the trucks unavailable. Find the closest Icecream shp near you! Enter your zip code below.</p>
          <div className="mapSearchGroup">
            <input></input>
            <button type="Submit">Search</button>
          </div>
        </div>
        <div className="mapGoogle">

        </div>
      </section>
    )
  }
})


export default Map;
