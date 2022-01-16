import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex-direction: row;
align-items: center;
justify-content:space-between;
padding:12px 25px 25px 25px;


`

export const WeatherCondition = styled.SafeAreaView`
align-items:center;
margin-left:5px;
`

export const WeatherConditionText = styled.Text`
  padding-top: 5px;
  color:white;
  margin-top:8px;
  font-size:18px;
`

export const Temperature = styled.Text`
font-size:75px;
font-weight:bold;
color:white
`