import React, { useState, useEffect}from 'react'
import {Container, Title,Info, Icon, Value} from './styles'
import {Feather} from '@expo/vector-icons'
import { Dimensions } from 'react-native';



function InfoObjetct({title, value, icon, fontSize}) {

  const [iconSize, setIconSize] = useState(0)

  useEffect(()=>{
    
    setIconSize(Number(Dimensions.get('window').width).toFixed() / 11)

  },[])

  return(
    <Container>
      <Icon>
        <Feather name={icon} size={iconSize} color="#1D0769"/>
        
      </Icon>
      <Info>
        <Title>{title}</Title>
        <Value style={{fontSize: Number(Dimensions.get('window').width).toFixed() / fontSize}} >{value}</Value>
      </Info> 
      
    </Container>
  )
}

export default InfoObjetct;