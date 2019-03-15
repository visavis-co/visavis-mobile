import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ChatComponent extends Component {
  
  render (){

    const myStyle = {
      flexShrink: 1,
      alignSelf: 'flex-end',
      backgroundColor: 'lightblue',
      color: 'white',
      padding: 8,
      borderRadius: 10
    }

    const yourStyle = {
      flexShrink: 1,
      alignSelf: 'flex-start',
      backgroundColor: 'lightgray',
      color: 'black',
      padding: 8,
      borderRadius: 10
    }

    return (        
      <View style={{ display: 'flex', margin: 2 }}>
        <Text style={(this.props.userId === this.props.msgFromId) ? myStyle : yourStyle}>{this.props.message}</Text>
      </View>
    )
  }
}

export default ChatComponent;