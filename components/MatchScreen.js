import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StatusBar, View, Text, KeyboardAvoidingView } from 'react-native';

import * as actions from '../actions/actions'
import ChatComponent from './ChatComponent'

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
  currentMatch: store.user.currentMatch,
  password: store.user.password,
  matchChats: store.user.matchChats,
  chatMsg: store.user.chatMsg,
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => { dispatch(actions.userLogin()) },
  updateChatMsg: (text) => { dispatch(actions.updateChatMsg(text)) },
  getMatchChats: (matchId) => { dispatch(actions.getChats(matchId)) }
});

class MatchScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Match Screen',
    headerStyle: {
      margin: 0,
      marginTop: Platform.OS === 'android' ? -StatusBar.currentHeight : 0
    }
  };

  componentDidUpdate() {
    // console.log(this.props);
  }

  render (){
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }} behavior='padding' enabled>
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 20 }}>
          <Text>Chat with <Text style={{fontWeight: 'bold'}}>{this.props.currentMatch.fullname}</Text> below</Text>
          <ChatComponent
            matchChats={this.props.matchChats}
            userId={this.props.userInfo.id}
            updateChatMsg={this.props.updateChatMsg}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen);