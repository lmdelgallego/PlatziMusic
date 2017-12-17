/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text
} from 'react-native';

import Comment from './Comment';

export default class CommentList extends Component<{}> {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount(){
    this.updateDataSource(this.props.comments);
  }

  componentWillReceiveProps(newProps){
    if(newProps.comments !== this.props.comments){
      console.warn(newProps.comments)
      this.updateDataSource(newProps.comments)
    }
  }

  updateDataSource = data => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={ (comment) => { 
          return(
            <Comment text={comment.text.toString()}/>
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});
