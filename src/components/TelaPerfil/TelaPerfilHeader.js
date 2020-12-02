import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
    header: {
        height:180,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#5DB075",
        flexDirection: "row",
        flexWrap: "wrap",
        zIndex:0,
    },
    bigText:{
        fontSize: 30,
        color: "white",
        fontWeight:"600",
        paddingLeft: 75,
        paddingRight:75,
        paddingTop: 10,
        fontFamily: "inter"
    },
    smallText:{
        fontSize: 16,
        color: "white",
        fontWeight:"500",
        paddingTop: 10,
        fontFamily: "inter"
    }
})
export default (props) => {
    return (
        <View style = {style.header}>
            <Text style = {style.smallText}>Jardins</Text>
            <Text style = {style.bigText}>{props.name}</Text>
            <Text style = {style.smallText}>Logout</Text>
        </View>
    )
}

