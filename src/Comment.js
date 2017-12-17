import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const DEFAULT_AVATAR = "https://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png";
const AVATAR_SIZE = 32;

class Comment extends Component {
  render() {
    
    return (
      <View style={styles.comment}>
        {
          this.props.avatar ?
          <Image style={styles.avatar} source={{uri: this.props.avatar}} /> :
          <Image style={styles.avatar} source={{uri: DEFAULT_AVATAR}} />
        }
        
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment:{
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  text:{
    marginLeft: 10,
    fontSize: 16,
  },
  avatar:{
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE/2
  }

})

export default Comment;