import React, {useEffect, useState}from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {} from '@react-navigation/native-stack'

import Home from '../Pages/Home'
import Authorization from '../Pages/Authorization'

import * as Location from 'expo-location'


const Stack = createNativeStackNavigator()

function Routes() {

const [PermissionStatus, setPermissionStatus] = useState('')
 
  useEffect(()=> {
    let isActive = true
    async function verifyPermisions() {
      const {status} = await Location.getForegroundPermissionsAsync()
      setPermissionStatus(status)
    }
    
    verifyPermisions()
  },[])

 
  return(
  <>

    {PermissionStatus !== 'granted' ? 
    <Stack.Navigator>
       <Stack.Screen 
       name="Authorization" 
       component={Authorization}
       options={{
         headerShown: false,
        }}
        />
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown: false,
      }}
      />
      </Stack.Navigator>
      :
      <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown: false,
      }}
      />
      </Stack.Navigator>
          }
            
  </>
  )
}

export default Routes;