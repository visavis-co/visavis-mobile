import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as actions from '../actions/actions'

const mapStateToProps = (store) => ({
  isLoggedIn: store.user.isLoggedIn,
  email: store.user.email,
  password: store.user.password
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => { dispatch(actions.userLogin()) },
  enterEmail: (text) => { dispatch(actions.enterEmail(text)) },
  enterPassword: (text) => { dispatch(actions.enterPassword(text)) },
});

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }
  
  handleLogInButton= () => {
    this.props.userLogin();
    this.setState({loading: true});
  }

  handleSignUpButton = () => {
    this.props.navigation.navigate('SignUp');
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
          title="Log In"
          onPress={this.handleLogInButton}
          buttonStyle={{margin: 10, width: 200}}
          loading={this.state.loading}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: 100,
            marginVertical: 10,
          }}
        />

        <Button
          title="Create an Account"
          onPress={this.handleSignUpButton}
          buttonStyle={{margin: 10, width: 200}}
        />

      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);