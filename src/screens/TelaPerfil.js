import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import TelaPerfilContent from '../components/TelaPerfil/TelaPerfilContent'
import TelaPerfilHeader from '../components/TelaPerfil/TelaPerfilHeader'
import TelaPerfilProfile from '../components/TelaPerfil/TelaPerfilProfile'

const styles = StyleSheet.create(
    
)



export default ({ navigation }) => {
    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(
        () => {
            fetch('https://plantgo.herokuapp.com/events', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: 'marcon'
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setListData(json)
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }, []
    )

    return (
        <SafeAreaView>
            <TelaPerfilHeader navigation={navigation} name="Meu perfil"/>
            <TelaPerfilProfile name="Vitor Estima" />
            { isLoading ?
                <ActivityIndicator style={{ flex: 1, position: "absolute", marginTop: '75%', marginLeft: '35%' }} animating={isLoading} size="large" color="#5DB075" />
                :
                <TelaPerfilContent data={listData}/>
            }
        </SafeAreaView>
    )
}

