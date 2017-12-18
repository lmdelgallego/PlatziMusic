/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import ArtistList from './ArtistList';
import { getArtist } from './api-client'

export default class HomeView extends Component<{}> {

  constructor(props){
    super(props);

    this.state = {
      artists: null
    }
  }
  
  componentDidMount(){
    getArtist()
    .then( data => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;

    return (
      <View style={styles.container}>
      {
        (artists === null) ?
        <ActivityIndicator style={styles.lodaing} size="large" /> :
        <ArtistList artists={artists} /> 
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 0
    })
  },
  lodaing:{
    flex: 1,
    alignContent: 'center'
  }
});
