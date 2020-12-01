import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { floor } from 'react-native-reanimated'

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        justifyContent: "center"
    },
    centro:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})


export default props => (
    <View style = {styles.centro}>
        <Text style={styles.texto}>AAAA</Text>
    </View>
)