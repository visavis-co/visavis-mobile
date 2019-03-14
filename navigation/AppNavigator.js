import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
// import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import HomeScreen from '../components/HomeScreen';
import MatchHistory from '../components/MatchHistory';
import MatchScreen from '../components/MatchScreen';
import SignUpScreen from '../components/SignUpScreen'

const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  MatchScreen: MatchScreen
},
{
  initialRouteName: 'HomeScreen',
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let swipeEnabled = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
    swipeEnabled = false;
  }
  return {
    tabBarVisible,
    swipeEnabled
  };
};

const AppTab = createMaterialTopTabNavigator({
    Home: HomeStack,
    MatchHistory: MatchHistory
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {backgroundColor: 'gray'},
      indicatorStyle: {backgroundColor: 'white'},
      activeTintColor: 'white',
      inactiveTintColor: 'black',
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppTab,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    // initialRouteName: 'App',
  }
));
