/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux'
export default class LoginView extends Component<{}> {


  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <LoginButton
          readPermissions={["public_profile","email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.error(result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    // alert(data.accessToken.toString())
                    Actions.home();
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome:{
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }
});
