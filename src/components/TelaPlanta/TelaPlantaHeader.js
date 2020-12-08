import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({
    header: {
        height: 180,
        alignItems: "center",
        backgroundColor: "#5DB075",
        flexDirection: "row",
        flexWrap: "wrap",
        zIndex: 0,
    },
    bigText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600",
        paddingLeft: "15%",
        paddingRight: 58,
        paddingTop: 10,
        fontFamily: "inter"
    },
    smallText: {
        marginLeft:10,
        fontSize: 16,
        color: "white",
        fontWeight: "500",
        paddingTop: 10,
        fontFamily: "inter"
    }
})
export default (props) => {
    return (
        <View style={style.header}>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("TelaJardim")}
            >
                <Text style={style.smallText}>Back</Text>
            </TouchableOpacity>

            <Text style={style.bigText}>{props.name}</Text>
        </View>
    )
}

