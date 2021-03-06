import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginManager, LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

class FBLoginButton extends Component {
  render () {
    return (
      <View>
        <LoginButton
          publishPermission={["email"]}
          readPermissions={['public_profile']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login is cancelled");
              } else {
                console.log('... ', result);
                alert("Login was successful with permissions: " + result.grantedPermssions);
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>    
    );
  }
}

export default FBLoginButton;