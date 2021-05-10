import React, { Component } from 'react';
import flats from '../data/flats.js';
import FlatsList from './flats_list';
import Flat from './flat';
import Map from './map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    }
  }

  selectFlat = (index) => {
    console.log("hello")
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <FlatsList flats={flats} selectFlat={this.selectFlat}/>
      <div className="map-container">
        <Map lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
      </div>

      </div>
    );
  }
}

export default App;
