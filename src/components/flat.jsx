import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.index)
  }
  render() {
    return (

        <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.flat.imageUrl})`}} onClick = {this.handleClick}>
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
    );
  }
}

export default Flat ;
