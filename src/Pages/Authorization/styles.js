import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.SafeAreaView`
background-color: #1D0769;
flex:1;
align-items: center;
justify-content:center;
padding:25px;

padding-top: ${getStatusBarHeight() + 5}px;
`

export const Title = styled.Text`
color: #FFF;
font-size: 40px;
text-align:center;
font-weight:bold;
margin-bottom: 20px;
`

export const Info = styled.Text`
color: #FFF;
text-align:center;
font-size:16px;
`

export const GetLocationButton = styled.TouchableOpacity`
background-color: #3366ff;
margin-top: 40px;
color:black;
height: 50px;
width: 90%;
border-radius: 25px;
align-items:center;
justify-content:center;
flex-direction:row;

`
export const ButtonText = styled.Text`
color: #FFF;
font-size:20px;
margin-left:15px;
padding-bottom:3px;
`

