import React from 'react'
import {Container, Title, Icon, ObjectWrapper,Wrapper } from './styles'
import {Feather} from '@expo/vector-icons'
import InfoObjetct from '../InfoObjetct';


function OtherInfo({otherTemps, wind}) {
  return(
    <Container>
        <Title>Weather Now</Title>
     
      <ObjectWrapper>
        <InfoObjetct title="Max temp" value={`${Math.round(otherTemps.temp_max)}°`} icon={"thermometer"} fontSize={9}/>
        <InfoObjetct title="Humidity" value={`${otherTemps.humidity}%`} icon={"droplet"} fontSize={9}/>
        <InfoObjetct title="Min temp" value={`${Math.round(otherTemps.temp_min)}°`} icon={"thermometer"} fontSize={9}/>
        <InfoObjetct title="Wind speed" value={`${(wind.speed).toFixed(1)}m/s`} icon={"wind"} fontSize={15}/>
        </ObjectWrapper>
      

    </Container>
  )
}

export default OtherInfo;