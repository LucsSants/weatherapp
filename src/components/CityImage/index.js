import React from 'react';
import {Container, CityImg} from './styles'

function CityImage() {
  return(
    <Container>
      <CityImg 
      resizeMethod="resize"
      source={require('../../assets/City.png')}/>
    </Container>
  )
}

export default CityImage;