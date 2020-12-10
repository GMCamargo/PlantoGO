import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const style = StyleSheet.create({
    header: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    bigText: {
        fontSize: 32,
        fontWeight: "600",
        paddingLeft: 35,
        paddingTop: 10,
        fontFamily: "inter"
    },
    smallText: {
        fontSize: 16,
        color: "#5DB075",
        fontWeight: "500",
        paddingTop: 10,
        fontFamily: "inter",
        marginLeft: 10
    },
    container: {
        padding: 10,
        flex: 1
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: '#e8e8e8',
        borderWidth: 1,
        borderColor: "lightgrey"
    },
    contentSmallText: {
        fontSize: 12,
        fontFamily: 'inter',
        marginBottom: 5,
        marginTop: 15
    },
    clickButton: {
        borderRadius: 35,
        alignSelf: 'flex-start',
        backgroundColor: '#5DB075',
        padding: 15,
        alignItems: 'center',
        marginBottom: 5
    },
    buttons: {
        marginLeft: 15,
        marginRight: 15,
        borderTopLeftRadius: 80,
        borderBottomLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderColor: 'lightgrey',
        borderWidth: 3,
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "stretch"
    },
    rightButton: {
        borderTopLeftRadius: 80,
        borderBottomLeftRadius: 80,
        padding: 10,
        flex: 1,
        alignItems: "center"
    },
    activeButton: {
        backgroundColor: "white",
    },
    leftButton: {
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        padding: 10,
        flex: 1,
        alignItems: "center",

    },
    inactiveButton: {
        backgroundColor: "lightgrey"
    },
    buttonText: {
        fontFamily: "inter",
        fontSize: 16,
        fontWeight: "900"
    }
})

export default (props) => {


    const { name, specie, monitor } = typeof props.route.params != "undefined" ?
        props.route.params :
        { name: '', specie: 'Girassol', monitor: true }

        //console.warn(props.route.params)


    const [nome, setNome] = useState(name)
    const [planta, setPlanta] = useState(specie)
    const [monitoramento, setMonitoramento] = useState(monitor)

    const adiocionarPlanta = () => {
        props.navigation.navigate('TelaJardim')

        return fetch('https://plantgo.herokuapp.com/create_plant', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: 'cleito',
                garden: 'main',
                nickname: nome,
                specie: planta.toLowerCase(),
                monitoring: monitoramento ? 'true' : 'false'

            })
        })
            .then((response) => {
                response = response.json()
                //console.warn(response)
            })
            .catch((error) => console.error(error))
    }
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TelaJardim")}
                    >
                        <Text style={style.smallText}>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={style.bigText}>{nome == "" ? "Nova Plantinha" : nome}</Text>
                </View>

                <View style={style.container}>
                    <Text style={style.contentSmallText}>
                        Nome
                </Text>
                    <TextInput
                        style={style.textInput}
                        placeholder="Digite o nome da sua planta"
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                    />
                    <Text style={style.contentSmallText}>Planta</Text>
                    <Picker
                        selectedValue={planta}
                        style={[{ alignSelf: 'stretch' }, style.textInput]}
                        onValueChange={(planta) => setPlanta(planta)
                        }>
                        <Picker.Item label="Girassol" value="girassol" />
                        <Picker.Item label="Orquidea" value="orquidea" />
                    </Picker>
                    <Text style={style.contentSmallText}>Monitoramento Automático</Text>
                    <View style={style.buttons}>
                        <TouchableOpacity
                            style={monitoramento ? [style.rightButton, style.activeButton] : [style.rightButton, style.inactiveButton]}
                            onPress={() => setMonitoramento(true)}
                        >
                            <Text style={monitoramento ? [style.buttonText, style.activeButton] : [style.buttonText, style.inactiveButton]}> Ligado </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={!monitoramento ? [style.leftButton, style.activeButton] : [style.leftButton, style.inactiveButton]}
                            onPress={() => setMonitoramento(false)}
                        >
                            <Text style={!monitoramento ? [style.buttonText, style.activeButton] : [style.buttonText, style.inactiveButton]}> Desligado </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#5DB075',
                            borderRadius: 40,
                            padding: 12,
                            marginTop: 125,
                            marginBottom: 45,
                            width: "100%",
                            alignItems: 'center'
                        }}

                        onPress={() => adiocionarPlanta()}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                            fontFamily: 'inter'
                        }}>Adicionar Plantinha!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}
