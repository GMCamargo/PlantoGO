import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

const style = StyleSheet.create({
    margem: {
        marginTop: 145,
        padding: 10
    },
    topicos:{
        marginLeft: 10,
        fontSize: 24,
        color: "black",
        fontWeight: "700",
        fontFamily: "inter"
    },
    smallText: {
        fontSize: 20,
        color: "black",
        fontWeight: "600",
        fontFamily: "inter",
        position: 'absolute'
    }
})
export default (props) => {
    
    return (
        <View style={style.margem}>
            <View style = {{flexDirection: "row", alignItems: 'center'}}>
                <Icon name="circle" color={"#5DB075"} size={25} />
                <Text style= {style.topicos}>Criado em</Text>
                <Text style={style.smallText}>{props.date}</Text>
            </View>
        </View>
    )
}
