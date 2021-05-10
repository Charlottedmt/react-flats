import React, { Component } from 'react';
import Flat from './flat';

class FlatsList extends Component {
  handleClick = (event) => {
    console.log(event.target);
  }

  renderList = () => {
    const { flats } = this.props
    return flats.map((flat, index) => {
      return <Flat flat={flat} key={flat.lat} index={index} selectFlat={this.props.selectFlat} />
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
