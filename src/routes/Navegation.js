import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from "react-native-vector-icons/FontAwesome"
import TelaPerfil from '../screens/TelaPerfil'
import TelaJardim from '../screens/TelaJardim'
import TelaAdicionarPlanta from '../screens/TelaAdicionarPlanta'
import { TelaJardimNavigator, TelaPerfilNavigator, TelaAdicionarPlantaNavigator } from './StackNavigation'

const Tab = createMaterialTopTabNavigator();

export default props => (
    <Tab.Navigator
        initialRouteName="TelaPerfil"

        tabBarPosition="bottom"

        tabBarOptions={{
            showLabel: false,
            activeTintColor: '#5DB075',
            inactiveTintColor: 'lightgray',
            indicatorStyle: {
                height: 0
            },
            showIcon: true,
            style: {
                backgroundColor: 'transparent',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                elevation: 0
            }
        }}
    >
        <Tab.Screen
            name="TelaPerfil"
            component={TelaPerfilNavigator}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="circle" color={color} size={25} />
                },
            }}
        />
        <Tab.Screen
            name="TelaJardim"
            component={TelaJardimNavigator}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="circle" color={color} size={25} />
                },
            }}
        />
        <Tab.Screen
            name="TelaAdicionarPlanta"
            component={TelaAdicionarPlantaNavigator}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="circle" color={color} size={25} />
                },
            }}
        />

    </Tab.Navigator>
)
