import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
background-color: white;
flex:1;
width:100%;
height:40%;


border-top-left-radius: 30px;
border-top-right-radius: 30px;

align-content:center;
justify-content:center;

margin-top: 10px;

position: absolute;
bottom:0;

`




export const ObjectWrapper = styled.View`
height:85%;
width: 100%;
align-items:center;
justify-content:center;
flex-wrap: wrap;

padding: 4%;

`

export const Title = styled.Text`
flex:1;
justify-content: flex-start; 
margin-top: 4%;
margin-left: 8%;
color: #1D0769;
font-size: ${Number(Dimensions.get('window').width).toFixed()/15}px;
font-weight: bold;

`
