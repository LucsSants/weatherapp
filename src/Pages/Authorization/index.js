import React, { useState, useEffect} from 'react'
import {Container, Title, Info, GetLocationButton,ButtonText } from './styles'
import {Feather} from '@expo/vector-icons'

import {BackHandler, Modal} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import * as Location from 'expo-location' 


function Authorizaion() {

  const navigation = useNavigation()


  function navigateToHome() {
    navigation.navigate('Home')
  }


  async function getPermission() {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if( status !== "granted") {
      BackHandler.exitApp();
      console.log("Not Granted")
    } else {
      navigateToHome()
    }
  }

 

  return(
      <Container>
      <Title>Welcome to the Weather App</Title>
      <Info >Pelase share your current location to get the weather in your area.</Info>
      
      <GetLocationButton onPress={()=> getPermission()}>
        <Feather name="navigation" size={25} color="#FFF"/>
        <ButtonText >Share Current Location</ButtonText>
      </GetLocationButton>
    </Container>

  )
}

export default Authorizaion;