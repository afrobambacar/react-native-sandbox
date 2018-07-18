import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Item extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: this.props.rowData.bgColor
          }
        ]}
        onPress={() => this.props.handleDestroyItem(this.props.rowData.id)}
      >
        <Text>{this.props.rowData.name}</Text>
      </TouchableOpacity>
    );
  }
}

Item.propTypes = {
  handleDestroyItem: PropTypes.func,
  rowData: PropTypes.object
};

export default Item;