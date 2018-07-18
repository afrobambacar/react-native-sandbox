import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import ItemList from '../components/ItemList';

class Random extends Component {
  render() {
    return (
      <View>
        <Header />
        <ItemList />
      </View>
    );
  }
}

export default Random;