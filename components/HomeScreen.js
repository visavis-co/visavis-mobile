import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

import * as actions from '../actions/actions';


const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
  currentMatch: store.user.currentMatch,
  password: store.user.password
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => { dispatch(actions.userLogin()) },
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  componentDidMount() {
    // console.log(this.props);
  }

  handleCoordinate = () => {
    this.props.navigation.navigate('MatchScreen');
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Text style={{fontSize: 20, marginHorizontal: 30, marginTop: 30, marginBottom: 20}}>Welcome {this.props.userInfo.fullname},</Text>
          <Text style={{fontSize: 18, marginHorizontal: 30}}>Your current match is...</Text>
          <Image style={{height: 250, width: 250, resizeMode: 'contain', alignSelf: 'center', margin: 40}} source={{uri: this.props.currentMatch.pictureurl}}></Image>
          <Text style={{fontSize: 30, marginHorizontal: 30, textAlign: 'center'}}>{this.props.currentMatch.fullname}</Text>
          <Button
            title='Send a Message'
            onPress={this.handleCoordinate}
            buttonStyle={{margin: 10, width: 200, alignSelf: 'center'}}
          />
        </View>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);