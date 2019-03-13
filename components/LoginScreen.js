import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import * as actions from '../actions/actions'

const mapStateToProps = (store) => ({
  isLoggedIn: store.user.isLoggedIn,
  // userInfo: store.user.userInfo,
  // currentMatch: store.user.currentMatch,
  // pastMatches: store.user.pastMatches,
  email: store.user.email,
  // fullName: store.user.fullName,
  password: store.user.password,
  // matchChats: store.user.matchChats,
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => { dispatch(actions.userLogin()) },
  // userSignup: (fullName, email, password) => { dispatch(actions.userSignup(fullName, email, password)) },
  // inSession: () => { dispatch(actions.inSession()) },
  enterEmail: (text) => { dispatch(actions.enterEmail(text)) },
  // enterFullName: (event) => { dispatch(actions.enterFullName(event.target.value)) },
  enterPassword: (text) => { dispatch(actions.enterPassword(text)) },
  // userLogout: (id) => { dispatch(actions.userLogout(id)) } ,
  // getMatchChats: (matchId) => { dispatch(actions.getChats(matchId)) },
});

class LoginScreen extends Component {

  componentDidUpdate() {
    // console.log(this.props);
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('App');
    }
  }

  render () {
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
          onPress={this.props.userLogin}
          buttonStyle={{margin: 10, paddingHorizontal: 30}}

        />
      </View>
    );



    // <div className='formLogin'>
    //   <img src='./../client/assets/visavis.jpg' width='250'></img>
    //   <Form id='login-form'>
    //     <Form.Group controlId='formEmail'>
    //       <Form.Control type='email' placeholder='Enter email' onChange={props.enterEmail} />
    //     </Form.Group>
    //     <Form.Group controlId='formPassword'>
    //       <Form.Control type='password' placeholder='Password' onChange={props.enterPassword} />
    //     </Form.Group>
    //     <div id='login-buttons'>
    //       <Button id='login-button' variant='primary' type='submit' className='btnLogin' onClick={(e) => {e.preventDefault(); props.userLogin(props.email, props.password)}}>Log in</Button>
    //       <a id='login-github' href="https://github.com/login/oauth/authorize?client_id=ce5a1d21ebdafdc7ed4b&redirect_uri=http://localhost:8080/oauth" className="btn btn-block btn-social btn-github"><FontAwesomeIcon className='picGithub' size="2x" icon={['fab', 'github']} /> Sign in with Github </a>
    //       <Button id='create-account' variant='primary'><Link to="/signup" className="linkButton">Create an account</Link></Button>
    //     </div>
    //   </Form>
    // </div>
  

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);