import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmxvdHRlZG10IiwiYSI6ImNra3J2ejh4bDB2N3gzMW1vMThjeTJ1OWIifQ.3kDJXQG5dfISG6mVZYwAuA';
// mapboxgl.workerClass = MapboxWorker;


class Map extends Component {
  // initMapbox = () => {
    // this.mapContainer = React.createRef()

  //   const mapElement = document.querySelector('.map-container');
  //   console.log(mapElement)
  //   if (mapElement) { // only build a map if there's a div#map to inject into
  //     const map = new mapboxgl.Map({
  //       container: 'map',
  //       style: 'mapbox://styles/mapbox/streets-v10'
  //     });
  //   }
  // }

    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiY2hhcmxvdHRlZG10IiwiYSI6ImNrbWx0Y25tODFkeGMyb3Bmem5jdmVycDMifQ.H_Wil4_qH-Jl9ZPYV3EOCg"
      />
    );
  }
}

//   render() {
//     return (
//       <div className="map-container">
//         {this.initMapbox()}
//       </div>
//     );
//   }
// }

export default Map;
