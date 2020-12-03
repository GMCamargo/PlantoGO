import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import TelaJardimContent from '../components/TelaJardins/TelaJardimContent'
import TelaJardimHeader from '../components/TelaJardins/TelaJardimHeader'

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ({navigation}) => (
    <View style = {styles.container}>
        <TelaJardimHeader navigation = {navigation}/>
        <TelaJardimContent/>
    </View>
)