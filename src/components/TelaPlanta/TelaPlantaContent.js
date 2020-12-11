import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

const style = StyleSheet.create({
    margem: {
        marginTop: 145,
        padding: 10,
        flex: 1
    },
    topicos: {
        marginLeft: 10,
        fontSize: 18,
        color: "black",
        fontWeight: "700",
        fontFamily: "inter"
    },
    smallText: {
        fontSize: 16,
        color: "black",
        fontWeight: "600",
        fontFamily: "inter",
        alignSelf: 'flex-end'
    },
    grupo: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})
export default (props) => {
    const removerPlanta = () => {
        props.navigation.navigate('TelaJardim')

        return fetch('https://plantgo.herokuapp.com/delete_plant', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.id

            })
        })
            .then((response) => {
                response = response.json()
                //console.warn(response)
            })
            .catch((error) => console.error(error))

            props.navigation.navigate("MainNavigator")
    }
    return (
        <View style={style.margem}>

            <View style={style.grupo}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="circle" color={"#5DB075"} size={25} />
                    <Text style={style.topicos}>Criado em</Text>
                </View>

                <Text style={style.smallText}>{props.data}</Text>
            </View>

            <View style={style.grupo}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="circle" color={"#5DB075"} size={25} />
                    <Text style={style.topicos}>Intervalo para regar</Text>
                </View>

                <Text style={style.smallText}>{props.irrigacao}</Text>
            </View>

            <View style={style.grupo}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="circle" color={"#5DB075"} size={25} />
                    <Text style={style.topicos}>Intervalo para adubar</Text>
                </View>

                <Text style={style.smallText}>{props.adubo}</Text>
            </View>

            <View style={style.grupo}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="circle" color={"#5DB075"} size={25} />
                    <Text style={style.topicos}>Colocar no sol</Text>
                </View>

                <Text style={style.smallText}>{props.sol}</Text>
            </View>

            <View style={style.grupo}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="circle" color={"#5DB075"} size={25} />
                    <Text style={style.topicos}>Tirar do sol</Text>
                </View>

                <Text style={style.smallText}>{props.forasol}</Text>
            </View>

            <View style={[style.grupo, { justifyContent: 'space-evenly' }]}>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#5DB075',
                        borderRadius: 40,
                        padding: 15,
                        width: 120,
                        alignItems: 'center'
                    }}

                    onPress={() => props.navigation.navigate("TelaEditarPlanta", {
                        id: props.id,
                        name: props.nome,
                        specie: props.especie,
                        monitor: props.monitor
                    })
                    }
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'inter'
                    }}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#5DB075',
                        borderRadius: 40,
                        padding: 15,
                        width: 120,
                        alignItems: 'center'
                    }}

                    onPress = {() => {removerPlanta()}}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'inter'
                    }}>Remover</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
