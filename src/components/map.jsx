import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmxvdHRlZG10IiwiYSI6ImNra3J2ejh4bDB2N3gzMW1vMThjeTJ1OWIifQ.3kDJXQG5dfISG6mVZYwAuA';
mapboxgl.workerClass = MapboxWorker;

class Map extends Component {
  initMapbox = () => {
    this.mapContainer = React.createRef()
    constmapElement = document.getElementById('map');
    console.log(mapElement)
    if (mapElement) { // only build a map if there's a div#map to inject into
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10'
      });
    }
  }
 render() {
    return (
      <div id="map">
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export default Map;
