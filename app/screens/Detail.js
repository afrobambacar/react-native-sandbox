import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Detail extends React.Component {
  render () {
    return (
      <View>
        <Text>This is a Detail.</Text>
        <Button 
          title="Go To Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
};
