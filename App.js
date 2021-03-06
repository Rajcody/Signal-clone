import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen'
import ChatScreen from './screens/ChatScreen';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


const Stack = createStackNavigator();
const globalScreenOptions= {
  headerStyle:{
    backgroundColor:'#2c6bed'
  },
  headerTitleStyle:{color:'white'},
  headerTintColor:'white',
  headerTitleAlign:'center',

};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
     // initialRouteName='Home'
      screenOptions={globalScreenOptions}>
       <Stack.Screen  name ='Login' component={LoginScreen}/>
       <Stack.Screen  name ='Register' component={RegisterScreen}/>
       <Stack.Screen  name ='Home' component={HomeScreen}/>
       <Stack.Screen  name ='AddChat' component={AddChatScreen}/>
       <Stack.Screen  name ='Chat' component={ChatScreen}/>

      </Stack.Navigator>
     
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
