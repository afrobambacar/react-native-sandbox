import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
      </View>
    );
  }
};

export default Home;