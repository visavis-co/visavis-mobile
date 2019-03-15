import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';

import ChatMessage from './ChatMessage'

class ChatComponent extends Component {

  handleSendButton() {
    
  }

  render(){

    const chatMessages = [];
    const chats = this.props.matchChats;
  
    for (let i = 0; i < chats.length; i += 1) {
      chatMessages.push(<ChatMessage
        key={i}
        userId={this.props.userId}
        msgFrom={chats[i].fullname}
        msgFromId={chats[i].user_id}
        message={chats[i].message}
        timestamp={chats[i].timestamp}
      />);
    }


    return (        
      <KeyboardAvoidingView style={{ height: '80%' }} behavior='padding' enabled>
        
        <View style={{ flex: 1, backgroundColor: '#eff1f2', padding: 10, justifyContent: 'flex-end' }}>
          {chatMessages}
        </View>
        
        <Input
          placeholder='Enter Message'
          onChangeText={this.props.updateChatMsg}
          rightIcon={<Button
            title="Send"
            onPress={this.handleSendButton}
          />}
          rightIconContainerStyle={{margin: 5}}
        />
        
        
        
        
      </KeyboardAvoidingView>
     )
  }
}

export default ChatComponent;