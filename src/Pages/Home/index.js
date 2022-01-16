
import React, { useState, useEffect} from 'react'
import {Container, Wrapper} from './styles.js'
import {ActivityIndicator, BackHandler} from 'react-native'

import api, {key} from "../../services/api"

import CityImage from '../../components/CityImage'
import  CityView  from '../../components/CityView';
import WeatherView from '../../components/WeatherView/index.js';

import OtherInfo from '../../components/OtheriInfo/index.js'

import * as Location from 'expo-location'

import Authorizaion from '../Authorization/index.js'



function Home() {
 

  const [loading, setLoading] = useState(true)
  const [Temperature, setTemperature] = useState({})
  const [CityName, setCityName] = useState("{}")
  const [WeatherInfo, setWeatherInfo] = useState([])
  const [windInfo, setWindInfo] = useState([])
  
  
  useEffect(()=> {
  let isActive = true

  async function getWeather() {
    let location = await Location.getCurrentPositionAsync({})
    console.log(location.coords.latitude) 
    console.log(location.coords.longitude) 

    const lat = location.coords.latitude
    const lon = location.coords.longitude
    const weather = await api.get(`?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    
    if(isActive) {
      setTemperature(weather.data.main)
      setCityName(weather.data.name)
      setWeatherInfo(weather.data.weather[0])
      setWindInfo(weather.data.wind)
      setLoading(false)
    }

    BackHandler.addEventListener('hardwareBackPress', ()=> BackHandler.exitApp())
    
  }

  function time() {
    const date = new Date();
  }
   
  getWeather()
  time()

  return () => {
    isActive= false
  }
},[])

if(loading) {
  return (
    <Container>
      <Wrapper>
      <ActivityIndicator size="large" color="#FFF"/>
      </Wrapper>
    </Container>
  )
}
  return(
    
    
    <Container>
      <CityView city={CityName} />
      <WeatherView temp={Temperature} info={WeatherInfo}/>
      <CityImage />
      <OtherInfo otherTemps={Temperature} wind={windInfo}/>
    </Container>
  )
}

export default Home;

