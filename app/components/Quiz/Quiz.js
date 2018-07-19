import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import _ from 'lodash';
import styles from './styles';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      x: 0,
      y: 0,
      z: ''
    };
    console.log('... this.state', this.state);
    console.log('... this.props', this.props);
  }

  componentDidMount() {
    console.log('... quiz componentDidMount');
    this.randomNumber();
  }

  componentWillReceiveProps(nextProps) {
    console.log('... quiz componentWillReceiveProps', nextProps);
  }

  randomNumber() {
    this.setState({ x: _.random(1, 9) });
    this.setState({ y: _.random(1, 9) });
  }

  showResult() {
    console.log('... quiz component to action: ', this.state, this.props);
    this.props.confirmed(this.state);
    this.setState({ z: '' });
    this.randomNumber();
  }

  render() {
    return (
      <View>
        <Text style={styles.quiz}>{this.state.x} x {this.state.y}</Text>
        <TextInput
          style={styles.input}
          keyboardType={'number-pad'}
          onChangeText={(z) => this.setState({z})}
          value={this.state.z}
        />
        <Button
          onPress={() => this.showResult()}
          title="확인"
          style={styles.btn}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default Quiz;
