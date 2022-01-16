import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.SafeAreaView`
background-color: #1D0769;
flex: 1;
padding-top: ${getStatusBarHeight() + 5}px;

`

export const Wrapper = styled.View`
flex:1;
align-items: center;
justify-content:center;
`

