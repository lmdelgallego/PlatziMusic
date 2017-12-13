/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {Scene,Router,Stack} from 'react-native-router-flux'
import HomeView from './HomeView';
import ArtistDetailView from './ArtistDetailView';
import LoginView from './LoginView';

export default class App extends Component<{}> {


  render() {

    return (
      <Router>
        <Stack key="root">
          <Scene key='login' component={LoginView} hideNavBar />
          <Scene key="home" component={HomeView} title="Home" hideNavBar/>
          <Scene key="artistDetail" component={ArtistDetailView}/>
        </Stack>
      </Router>
    );
  }
}
