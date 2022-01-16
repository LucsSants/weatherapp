import React from 'react';
import {Feather} from '@expo/vector-icons'
import {Container, WeatherCondition, WeatherConditionText, Temperature} from './styles'
import { getIconName } from '../../utils/getIcon';

function WeatherView({temp, info}) {
  return(
    <Container>
    <WeatherCondition>
      <Feather name={getIconName(info.icon)} color="white" size={45}/>
      <WeatherConditionText>{info.main}</WeatherConditionText>
    </WeatherCondition>

    <Temperature>{`${Math.round(temp.temp)}°`}</Temperature>
    
   </Container> 
  )
}

export default WeatherView;