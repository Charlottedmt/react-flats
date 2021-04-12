import React, { Component } from 'react';
import Flat from './flat';

class FlatsList extends Component {
  handleClick = (event) => {
    console.log(event.target);
  }

  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return <Flat flat={flat} key={flat.lat} index={index} />
    });
  }

  render() {
    return (
      <div className="flat-list" onClick={this.handleClick}>
        {this.renderList()}
      </div>
    );
  }
}

export default FlatsList;
