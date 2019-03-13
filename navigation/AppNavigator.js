import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
// import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import HomeScreen from '../components/Home';
import MatchHistory from '../components/MatchHistory';

const AppStack = createMaterialTopTabNavigator({
   Home: HomeScreen,
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
const AuthStack = createStackNavigator({ Login: LoginScreen }, {headerMode: 'none'});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    // initialRouteName: 'App',
  }
));
