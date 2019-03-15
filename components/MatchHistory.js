import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
  pastMatches: store.user.pastMatches,
  matchChats: store.user.matchChats,
});

const mapDispatchToProps = dispatch => ({

});


class MatchHistory extends Component {
  static navigationOptions = {
    title: 'Match History',
  };


  render (){

    const pastMatches = [];
    this.props.pastMatches.map((u,i)=>{
      pastMatches.push(
      <Card
        key={i}
        title={u.fullname}
        image={{uri: u.pictureurl}}>
        <Text style={{textAlign: 'center'}}>Met {(u.inperson) ? 'at' : 'via'} {u.location} on {new Date(u.dateCompleted).toDateString()}</Text>
        <Button
        title='Chat History'
        />
      </Card>
      )
    })
  
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <View>
          {pastMatches}
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);