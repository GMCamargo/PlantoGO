import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
    title: {
        fontWeight: "800",
        fontFamily: "inter",
        fontSize: 18
    },
    desc: {
        fontFamily: "inter",
        fontSize: 14
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: 'stretch',
        height: 80,
        padding: 10
    },
    img: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 67,
        width: 67,
        justifyContent: "center"
    },
    textBorder: {
        flex:1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    timeLeft:{
        color:'lightgray',
        marginLeft:10
    }

})

export default (props) => {
    return (
        <View style={style.container}>
            <View style={style.img}>
                <Text>Img</Text>
            </View>

            <View style={style.textBorder}>

                <Text style={style.title}>{props.title}</Text>
                <Text style={style.desc}>{props.desc}</Text>
            </View>

            <View>
                <Text style={style.timeLeft}>em 8 min  </Text>
            </View>

        </View>
    )
}
