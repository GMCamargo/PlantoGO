import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

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
        marginRight:10,
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
        color:'lightgrey',
        marginLeft:10
    }

})

export default (props) => {
    const dic = {
        'orquidea': require('../../images/orquidea.png')
    }
    return (
        <View style={style.container}>
            <Image source= {dic[props.img]} style={style.img}/>
            <View style={style.textBorder}>

                <Text style={style.title}>{props.title}</Text>
                <Text style={style.desc}>{props.desc}</Text>
            </View>

            <View>
                <Text style={style.timeLeft}> {props.time}</Text>
            </View>

        </View>
    )
}
