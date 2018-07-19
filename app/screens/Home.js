import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Quiz from '../actions/Quiz';
import QuizList from '../components/QuizList';

class Home extends Component {
  render () {
    return (
      <View>
        <Button
          title="FBLogin Example"
          onPress={() => this.props.navigation.navigate('FBLogin')}
        />
        <Button
          title="Go To Detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Button
          title="Making Random Item"
          onPress={() => this.props.navigation.navigate('Random')}
        />
        <Button
          title="Counter"
          onPress={() => this.props.navigation.navigate('Counter')}
        />
        <Button
          title="Reddit"
          onPress={() => this.props.navigation.navigate('Reddit')}
        />
        <Button
          title="Googoodan"
          onPress={() => this.props.navigation.navigate('Googoodan')}
        />
        <Quiz />
        <QuizList />
      </View>
    );
  }
};

export default Home;