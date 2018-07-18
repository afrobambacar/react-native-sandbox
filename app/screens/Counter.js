import React, { Component } from 'react';
import { View } from 'react-native';
import CounterAction from '../actions/Counter';

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CounterAction />
    );
  }
}

export default Counter;
