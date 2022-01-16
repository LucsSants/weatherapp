import styled from 'styled-components/native'
import { Dimensions } from 'react-native';


export const Container = styled.View`
flex-direction:row;
align-items:center;
width:50%;
height: 50%;

margin-left: 2%;

`

export const Icon = styled.View`
justify-content:center;
align-items:center;
height: ${Dimensions.get('window').width * 0.5 / 2.7}px;
width:  ${Dimensions.get('window').width * 0.5 / 2.7}px;

border-radius: ${Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}px;
background-color:#D7DBDD;


`
export const Info = styled.View`
margin-left: 12px;

`

export const Title = styled.Text`
color:#1D0769;
font-size: 16px;

`

export const Value = styled.Text`
color:#1D0769;

align-self:center;
font-weight: bold;

`



