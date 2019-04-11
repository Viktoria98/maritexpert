import React, { Component, PropTypes } from 'react';
import Button from 'react-bootstrap';
import './Counter.css';

class Counter extends Component {
  render() {
    const { onClick, value } = this.props;

    return (
      <div>
        <div className='counter-label'>
          Value: {value}
        </div>
        <button onClick={onClick}>+</button>
      </div>      
    );
  }
}

export default Counter;