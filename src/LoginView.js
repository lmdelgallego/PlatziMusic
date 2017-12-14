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
import {Actions} from 'react-native-router-flux';

import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC6d6Tlr8scImGWMqcRFpeMIG5iWax7ZHw",
  authDomain: "platzimusic-10557.firebaseapp.com",
  databaseURL: "https://platzimusic-10557.firebaseio.com",
  projectId: "platzimusic-10557",
  storageBucket: "",
  messagingSenderId: "976509655077"
};
firebase.initializeApp(config);

export default class LoginView extends Component<{}> {

  authenticateUser(accessToken){

  }

  handleLoginFinished = (error, result) => {
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

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <LoginButton
          readPermissions={["public_profile","email"]}
          onLoginFinished={ this.handleLoginFinished}
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
