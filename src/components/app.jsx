import React, { Component } from 'react';
import flats from '../data/flats.js';
import FlatsList from './flats_list';
import Flat from './flat';
import Map from './map';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: ""
    }
  }

  changeSelectedFlat = () => {

  }
  render() {
    return (
      <div>
        <FlatsList flats={flats}/>
      <div className="map-container">

        </div>

      </div>
    );
  }
}

export default App;
