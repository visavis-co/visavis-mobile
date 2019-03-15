import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as actions from '../actions/actions'

const mapStateToProps = (store) => ({
  isLoggedIn: store.user.isLoggedIn,
  email: store.user.email,
  fullName: store.user.fullName,
  password: store.user.password
});

const mapDispatchToProps = dispatch => ({
  userSignup: () => { dispatch(actions.userSignup()) },
  enterEmail: (text) => { dispatch(actions.enterEmail(text)) },
  enterFullName: (text) => { dispatch(actions.enterFullName(text)) },
  enterPassword: (text) => { dispatch(actions.enterPassword(text)) }
});

class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }
  
  handleSignUpButton = () => {
    this.props.userSignup();
    this.setState({loading: true});
  }

  handleCancel = () => {
    this.props.navigation.pop();
  }

  componentDidUpdate() {
    // console.log(this.props);
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('App');
    }
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Image style={{width: "85%", resizeMode: "contain", marginTop: 100}} source={require('../assets/images/visavis.jpg')}/>
        <Input
          containerStyle={{width: "90%", margin: 5}}
          inputStyle={{marginLeft: 10}}
          placeholder='Enter First Name'
          leftIcon={{ type: 'font-awesome', name: 'drivers-license-o' }}
          leftIconContainerStyle={{width: 30}}
          textContentType='username'
          keyboardType='email-address'
          onChangeText={this.props.enterFullName}
          autoCapitalize='none'
        />
        <Input
          containerStyle={{width: "90%", margin: 5}}
          inputStyle={{marginLeft: 10}}
          placeholder='Enter Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
          leftIconContainerStyle={{width: 30}}
          textContentType='username'
          keyboardType='email-address'
          onChangeText={this.props.enterEmail}
          autoCapitalize='none'
        />
        <Input
          containerStyle={{width: "90%", margin: 5}}
          inputStyle={{marginLeft: 10}}
          placeholder='Enter Password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          leftIconContainerStyle={{width: 30}}
          textContentType='password'
          secureTextEntry={true}
          onChangeText={this.props.enterPassword}
        />
        <Button
          title="Sign Up"
          onPress={this.handleSignUpButton}
          buttonStyle={{margin: 10, width: 200}}
          loading={this.state.loading}
        />
        <Button
          title="Cancel"
          onPress={this.handleCancel}
          buttonStyle={{margin: 10, width: 200}}
        />
        
      </View>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);