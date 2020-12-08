import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import TelaPlantaContent from '../components/TelaPlanta/TelaPlantaContent'
import TelaPlantaHeader from '../components/TelaPlanta/TelaPlantaHeader'
import TelaPlantaProfile from '../components/TelaPlanta/TelaPlantaProfile'

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


export default (props) => {
    const { id, 
        nickname,
        specie,
        monitoring,
        date,
        img} = props.route.params;
    return (
        <SafeAreaView style={styles.container}>
            <TelaPlantaHeader navigation = {props.navigation} name="Minha plantinha" style={styles.header} />
            <TelaPlantaProfile name={nickname} img={img} date={date}/>
            <TelaPlantaContent style={styles.content} />
        </SafeAreaView>
    )
}
