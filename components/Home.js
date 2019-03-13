import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import * as actions from '../actions/actions';


const mapStateToProps = (store) => ({
  // isLoggedIn: store.user.isLoggedIn,
  userInfo: store.user.userInfo,
  currentMatch: store.user.currentMatch,
  // pastMatches: store.user.pastMatches,
  // email: store.user.email,
  // fullName: store.user.fullName,
  password: store.user.password,
  // matchChats: store.user.matchChats,
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => { dispatch(actions.userLogin()) },
  userSignup: (fullName, email, password) => { dispatch(actions.userSignup(fullName, email, password)) },
  inSession: () => { dispatch(actions.inSession()) },
  enterEmail: (text) => { dispatch(actions.enterEmail(text)) },
  // enterFullName: (event) => { dispatch(actions.enterFullName(event.target.value)) },
  // enterPassword: (text) => { dispatch(actions.enterPassword(text)) },
  // userLogout: (id) => { dispatch(actions.userLogout(id)) } ,
  // getMatchChats: (matchId) => { dispatch(actions.getChats(matchId)) },
});

class Home extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  // <h4>Your current match is...</h4><br/>
  //             <h2>{props.currentMatch.fullname}!</h2><br/><br/>
  //   // const assets = '/client/assets/';

    // const current = props.currentMatch;
    // const matchPic = assets + current.pictureurl;

    // const history = [];
    // for (let i = 0; i < props.pastMatches.length; i++) {
    //     let temp = <Row className="pastMatches" key={i * 3}><Col md={6}><h5>{props.pastMatches[i].fullname}</h5></Col><Col md={6}><Image src={assets + props.pastMatches[i].pictureurl} roundedCircle className="imageProfile" key={i * 15} /></Col></Row>
    //     history.push(temp);
    //     // history.push(props.pastMatches[i].fullname);
    // }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Text style={{fontSize: 20, marginHorizontal: 30, marginTop: 30, marginBottom: 20}}>Welcome {this.props.userInfo.fullname},</Text>
          <Text style={{fontSize: 18, marginHorizontal: 30}}>Your current match is...</Text>
          <Image style={{height: 250, width: 250, resizeMode: "contain", alignSelf: "center", margin: 40}} source={require('../assets/images/profile-nisha.jpg')}></Image>
          <Text style={{fontSize: 30, marginHorizontal: 30, textAlign: 'center'}}>{this.props.currentMatch.fullname}</Text>
        </View>

/* <div className="home">
<Header userInfo={props.userInfo} userLogout={props.userLogout} />
<div id='current-match'>
  <Row>
    <Col md={6}>
      <h4>Your current match is...</h4><br/>
      <h2>{props.currentMatch.fullname}!</h2><br/><br/>
      <MatchButton />
    </Col>
    <Col md={6}><Image className='pic-current-match' src={matchPic} roundedCircle alt="Current match's profile pic" /></Col>
  </Row>
</div>

<Container className='past-matches-main'>
  <h3>Past Matches</h3>
  <div id='past-match-cards'>
    {pastMatches}
  </div>
</Container>
</div> */

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);