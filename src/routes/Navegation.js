import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import TelaIntro from '../screens/1TelaIntro'
import TelaCapa from '../screens/2TelaCapa'

const Tab = createMaterialTopTabNavigator ();

export default props => (
    <Tab.Navigator
        initialRouteName="TelaIntro"

        screenOptions = {{
            
        }}
        tabBarOptions = {{
            showLabel:false,
            style:{
                display: 'none'
            }
            
        }}>
      <Tab.Screen name="TelaIntro" component={TelaIntro} />
      <Tab.Screen name="TelaCapa" component={TelaCapa} />
    </Tab.Navigator>
)
