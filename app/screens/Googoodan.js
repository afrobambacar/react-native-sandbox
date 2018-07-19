import React, { Component } from 'react';
import { View } from 'react-native';
import Quiz from '../actions/Quiz';
import QuizList from '../components/QuizList';

class Googoodan extends Component {
  render() {
    return (
      <View>
        <Quiz />
        <QuizList />
      </View>
    );
  }
}

export default Googoodan;
