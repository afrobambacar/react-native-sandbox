import React, { Component } from 'react';
import { View, Text } from 'react-native';

import FBLoginButton from '../components/FBLoginButton';

class FBLogin extends Component {
  render() {
    return (
      <View>
        <Text>Login with Facebook</Text>
        <FBLoginButton />
      </View>
    );
  }
}

export default FBLogin;