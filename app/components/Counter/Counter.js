import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.increment}
          title='Increase Count'
          color='#841584'
          accessibilityLabel='Increase Count'
        />
        
        <Text>{this.props.count}</Text>

        <Button
          onPress={this.props.decrement}
          title='Decrease Count'
          color='#841584'
          accessibilityLabel='Decrease Count'
        />
      </View>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func,
  count: PropTypes.number
};

export default Counter;
