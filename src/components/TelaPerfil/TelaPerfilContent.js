import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated';
import TelaPerfilItemLista from './TelaPerfilItemLista';
import UUIDGenerator from 'react-native-uuid-generator';
/*
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: require('../../images/orquidea.png'),
        title: 'Regar sua Orquídea',
        desc: 'Quantidade média de água'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        img: require('../../images/girassol.png'),
        title: 'Regar seu Girassol',
        desc: 'Pouca quantiade de água'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        img: require('../../images/orquidea.png'),
        title: 'Retirar Orquídea do Sol',
        desc: 'Tempo de exposição à luz solar alcançado'
    },
];
*/
const renderItem = ({ item }) => (
    <TelaPerfilItemLista title={item.title} desc={item.tip} img={item.img} time={item.time} />
);

const style = StyleSheet.create({
    margem: {
        marginTop: 125
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
    leftButton: {
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        padding: 10,
        flex: 1,
        alignItems: "center"
    },
    buttonText: {
        fontFamily: "inter",
        fontSize: 16,
        fontWeight: "900"
    },
    activeButton: {
        backgroundColor: "white",
    },
    activeText: {
        color: "#5DB075"
    },
    inactiveButton: {
        backgroundColor: "lightgrey"
    },
    inactiveText: {
        color: 'grey'
    }
})
export default (props) => {
    const [log, setLog] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [listData, setListData] = useState(props.data)

    //console.warn(props.data)

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)

        return fetch('https://plantgo.herokuapp.com/events', {
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
                setRefreshing(false)
            })
            .catch((error) => console.error(error))
    }, [refreshing])

    return (
        <View style={style.margem}>
            <View style={style.buttons}>
                <TouchableOpacity
                    style={log ? [style.rightButton, style.activeButton] : [style.rightButton, style.inactiveButton]}
                    onPress={() => setLog(true)}
                >
                    <Text style={log ? [style.buttonText, style.activeText] : [style.buttonText, style.inactiveText]}> Proximos </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!log ? [style.leftButton, style.activeButton] : [style.leftButton, style.inactiveButton]}
                    onPress={() => setLog(false)}
                >
                    <Text style={log ? [style.buttonText, style.inactiveText] : [style.buttonText, style.activeText]}> Passados </Text>
                </TouchableOpacity>
            </View>
            <View style = {{marginBottom:50}}>
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    contentContainerStyle={{
                        paddingBottom:500
                    }}
                />
            </View>
        </View>
    )
}
