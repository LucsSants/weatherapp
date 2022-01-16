import React from 'react';
import { Container, City,Time} from "./styles";


function CityView({city}) {
  function DateAndTime() {
    const dateAndTime = Date(Date.now()).split(" ", 6)
    const date = `${dateAndTime[0]}, ${dateAndTime[1]} ${dateAndTime[2]}`
    
    
    return `${date}` 
  }

  return(
    <Container>
    <City>{city}</City>
    <Time>{DateAndTime()}</Time>
    
   </Container> 
  )
}

export default CityView;