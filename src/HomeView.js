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

import ArtistList from './ArtistList';
import { getArtist } from './api-client'

export default class HomeView extends Component<{}> {

  constructor(props){
    super(props);

    this.state = {
      artists: []
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
        <ArtistList
          artists={artists}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  }
});
