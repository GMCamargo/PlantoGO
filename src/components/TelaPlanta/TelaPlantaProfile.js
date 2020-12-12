import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
const style = StyleSheet.create({
    flutuante: {
        marginTop:80,
        position: "absolute",
        zIndex: 5,
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems:"center",
        flex:1,
        flexDirection: "row"
    },
    text:{
        fontSize: 32,
        fontWeight:"bold",
        paddingLeft: 100,
        paddingRight:100,
        paddingTop: 10,
        fontFamily: "inter"
    }

})

export default (props) => {
    const dic = {
        'orquidea': require('../../images/orquidea.png')
    }
    return (
            <View style={style.flutuante}>
                <Image source={dic[props.img]}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 200 / 2,
                        borderWidth: 5,
                        borderColor: "white"
                    }}
                />
                <Text style= {style.text}>{props.name}</Text>
            </View>
    )
}
