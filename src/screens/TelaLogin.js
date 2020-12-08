import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'

const style = StyleSheet.create({
    inputView: {
        justifyContent: "center",
        flex:1,
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    loginText:{
        fontFamily: "inter",
        fontWeight: '900',
        color: "white"
    },
    loginBtn: {
        alignSelf:'stretch',
        backgroundColor: "#5DB075",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
})

export default (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)
    const authorize = () => {
        /*
        return fetch('https://plantgo.herokuapp.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                senha: password
            })
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                setLoginFailed(true)
                console.error(error)
            })
            .finally(() => {
                if(!loginFailed){
                    props.navigator.navigate("TelaPerfil")
                }
            })*/
            props.navigation.navigate("MainNavigator")
    }
    return (
        <View style={style.inputView} >
            { loginFailed ?
                <Text>
                    Login ou senha inválidos
                </Text> : null
            }
            <TextInput
                style={style.inputText}
                placeholder="Login..."
                placeholderTextColor="#003f5c"
                onChangeText={text => setLogin(text)} />
            <TextInput
                style={style.inputText}
                placeholder="Senha..."
                placeholderTextColor="#003f5c"
                onChangeText={text => setPassword(text)} />
            <TouchableOpacity
                style={style.loginBtn}
                onPress={() => authorize()}
            >
                <Text style={style.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}
