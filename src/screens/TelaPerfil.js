import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import TelaPerfilContent from '../components/TelaPerfil/TelaPerfilContent'
import TelaPerfilHeader from '../components/TelaPerfil/TelaPerfilHeader'

const styles = StyleSheet.create(
    {
        texto: {
            fontSize: 30,
            justifyContent: "center"
        },
        corFundoMenor: {
            backgroundColor: "#5DB075"
        },
        centro: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        container: {
            flex: 1,
        },
        buttons: {
            flexDirection: "row",
            flexWrap: "wrap",
        }
    }
)


export default props => (
    <SafeAreaView style={styles.container}>
        <TelaPerfilHeader name="Meu perfil" style = {styles.header}/>
        <TelaPerfilContent style = {styles.content}/>
    </SafeAreaView>
)
