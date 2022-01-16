import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/Pages/Home';
import Authorizaion from './src/Pages/Authorization';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="light" 
      translucent
      backgroundColor= 'transparent'
      />
      <Routes/>
    {/* <Authorizaion/> */}
    {/* <Home/> */}
    </NavigationContainer>
    
  );
}

