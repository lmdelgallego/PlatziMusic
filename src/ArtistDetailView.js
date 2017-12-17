/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import firebase, { firebaseAuth, firebaseDatabase } from './firebase';

import ArtistBox from './ArtisBox';
import CommentList from './CommentList';

export default class ArtistDetailView extends Component<{}> {

  state= {
    comments: []
  }

  componentDidMount(){
    this.getArtistCommentRef().on('child_added', this.addComment);
    
  }

  addComment = (data) => {
    const comment = data.val();
    this.setState({
      comments: this.state.comments.concat(comment)
    });
  }
  handleSend = () =>{
    const {text} = this.state;
    const artistCommentsref = this.getArtistCommentRef()
    // Create a new post reference with an auto-generated id
    const newCommentRef = artistCommentsref.push();
    newCommentRef.set({ text });
  }

  handleChangeText = (text) =>{
    this.setState({text})
  }

  getArtistCommentRef = () =>{
    const { id } = this.props.artist;
    return firebaseDatabase.ref(`comments/${id}`);
  }

  render() {
    const artist = this.props.artist;
  
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <CommentList comments={this.state.comments}/>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder="Opina sobre este artista "
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="grey" />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  inputContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0, 
    left: 0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input:{
    flex: 1,
    height: 50
  }
});
