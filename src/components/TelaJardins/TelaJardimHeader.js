import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({
    header: {
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    bigText: {
        fontSize: 32,
        fontWeight: "600",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        fontFamily: "inter"
    },
    smallText: {
        fontSize: 16,
        color: "#5DB075",
        fontWeight: "500",
        paddingTop: 10,
        fontFamily: "inter"
    }
})

export default ({navigation}) => {
    return (
        <View style={style.header}>
            <TouchableOpacity
                onPress = {() => navigation.navigate("TelaPerfil")}
            >
                <Text style={style.smallText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={style.bigText}>Meu Jardim</Text>

            <TouchableOpacity
                onPress = {() => navigation.navigate("TelaAdicionarPlanta")}
            >
                <Text style={style.smallText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}
