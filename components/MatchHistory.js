import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const mapStateToProps = (store) => ({
  // isLoggedIn: store.user.isLoggedIn,
  userInfo: store.user.userInfo,
  // currentMatch: store.user.currentMatch,
  pastMatches: store.user.pastMatches,
  // email: store.user.email,
  // fullName: store.user.fullName,
  // password: store.user.password,
  matchChats: store.user.matchChats,
  // chatMsg: store.user.chatMsg,
});

const mapDispatchToProps = dispatch => ({
  // userLogin: () => { dispatch(actions.userLogin()) },
  // userSignup: (fullName, email, password) => { dispatch(actions.userSignup(fullName, email, password)) },
  // inSession: () => { dispatch(actions.inSession()) },
  // enterEmail: (text) => { dispatch(actions.enterEmail(text)) },
  // enterFullName: (event) => { dispatch(actions.enterFullName(event.target.value)) },
  // enterPassword: (text) => { dispatch(actions.enterPassword(text)) },
  // userLogout: (id) => { dispatch(actions.userLogout(id)) } ,
  // updateChatMsg: (text) => { dispatch(actions.updateChatMsg(text)) },
  // getMatchChats: (matchId) => { dispatch(actions.getChats(matchId)) },
});


class MatchHistory extends Component {
  static navigationOptions = {
    title: 'Match History',
  };



    
    // const assets = '/client/assets/';

    // const current = props.currentMatch;
    // const matchPic = assets + current.pictureurl;

    // const history = [];
    // for (let i = 0; i < props.pastMatches.length; i++) {
    //     let temp = <Row className="pastMatches" key={i * 3}><Col md={6}><h5>{props.pastMatches[i].fullname}</h5></Col><Col md={6}><Image src={assets + props.pastMatches[i].pictureurl} roundedCircle className="imageProfile" key={i * 15} /></Col></Row>
    //     history.push(temp);
    //     // history.push(props.pastMatches[i].fullname);
    // }

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