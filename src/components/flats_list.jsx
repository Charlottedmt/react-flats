import React, { Component } from 'react';
import Flat from './flat';
import flats from '../data/flats.js';

class FlatsList extends Component {

  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return <Flat flat={flat} key={index} />
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatsList;
