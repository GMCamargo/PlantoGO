import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, ActivityIndicator } from 'react-native'
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
    const { id, img } = props.route.params;
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://plantgo.herokuapp.com/plant', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    },
        []
    )
    //console.warn(data)
    return (
        <SafeAreaView style={styles.container}>
            { loading ?
                <ActivityIndicator style={{ position:'absolute', marginTop: '50%', marginLeft: '35%' }} animating={loading} size="large" color="#5DB075" /> 
                :
                <SafeAreaView style={styles.container}>
                    <TelaPlantaHeader navigation={props.navigation} name="Minha plantinha" style={styles.header} />
                    <TelaPlantaProfile img={img} name={data.name} />
                    <TelaPlantaContent 
                        style={styles.content}
                        data={data.created_at}
                        irrigacao={data.irrigate}
                        monitor = {data.monitor}
                        adubo = {data.soil}
                        sol = {data.sun_in}
                        forasol = {data.sun_out}
                        navigation = {props.navigation}
                        nome={data.name}
                        especie = {data.specie}
                    />
                </SafeAreaView>
            }
        </SafeAreaView>
    )
}
