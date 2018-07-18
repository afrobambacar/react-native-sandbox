import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('... props', props);
    this.handleCreateItem = this.handleCreateItem.bind(this);
    this.randomizeItemData = this.randomizeItemData.bind(this);
  }

  handleCreateItem() {
    const randomizeItemData = this.randomizeItemData();

    this.props.dispatch({ type: 'ADD_ITEM', ...randomizeItemData });
  }

  randomizeItemData() {
    const colorArr = ['#2892b4', '#b44a28', '#28B490'];
    const randColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    const randNum = Math.floor(Math.random() * 1000 + 1);
    const randName = 'Item' + randNum;

    return { name: randName, bgColor: randColor };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left} />
          <View style={styles.middle}>
            <TouchableOpacity onPress={() => this.handleCreateItem()}>
              <Text style={styles.textRight}>ADD ITEM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right} />
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Header);
