import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import LoginNavigation from './LoginNavigation'

export default props => (
    <SafeAreaView style={{flex:1, justifyContent: 'center'}}>
        <NavigationContainer>
            <LoginNavigation/>
        </NavigationContainer>
    </SafeAreaView>
)