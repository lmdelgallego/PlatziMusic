/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux';

import firebase, {firebaseAuth, firebaseDatabase} from "./firebase";

const {FacebookAuthProvider} = firebase.auth;


export default class LoginView extends Component<{}> {

  state = {
    user: null
  }

  componentWillMount(){
    this.authenticateUser();
  }

  authenticateUser = () => {

    AccessToken.getCurrentAccessToken().then((data) => {
      const {accessToken} = data;
      const credential = FacebookAuthProvider.credential(accessToken.toString());
      firebaseAuth.signInWithCredential(credential).then((user) => {
        
        // console.warn("Sign In Success", user.displayName);
        // Merge prevUser and user data stored in Firebase.
        // Note: How you handle this is specific to your application
        this.setState({ user });
        Actions.home()
        // // After data is migrated delete the duplicate user
        // return user.delete().then(function() {
        //   // Link the OAuth Credential to original account
        //   return prevUser.link(credential);
        // }).then(function() {
        //   // Sign in with the newly linked credential
        //   return firebaseAuth.signInWithCredential(credential);
        // });
      }).catch(function(error) {
        console.log("Sign In Error", error);
      });
    })
    // Sign in user with another account
  }

  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser();
    }
  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <Text style={styles.welcome}>
          { this.state.user && this.state.user.displayName }
        </Text>
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
