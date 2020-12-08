import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import TelaJardimContent from '../components/TelaJardins/TelaJardimContent'
import TelaJardimHeader from '../components/TelaJardins/TelaJardimHeader'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ({ navigation }) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() =>{
        fetch('https://plantgo.herokuapp.com/garden', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: 'cleito'
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
        
        <View style={styles.container}>
            <TelaJardimHeader navigation={navigation} />
            { isLoading ? <ActivityIndicator/> : (
            <TelaJardimContent data = {data} navigation={navigation}/>
            )}
        </View>
        
    )
}