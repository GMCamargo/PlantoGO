import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated';
import TelaPerfilItemLista from './TelaPerfilItemLista';

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
const renderItem = ({ item }) => (
    <TelaPerfilItemLista title={item.title} desc={item.desc} img= {item.img}/>
);

const style = StyleSheet.create({
    margem: {
        marginTop: 145
    },
    buttons: {
        marginLeft:15,
        marginRight:15,
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
        backgroundColor: "white",
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
        flex:1,
        alignItems: "center",
        backgroundColor:"lightgrey"
    },
    buttonText:{
        fontFamily: "inter",
        fontSize: 16,
        fontWeight: "900"
    },
    activeButton:{
        color:"#5DB075"
    },
    inactiveButton:{
        color: "grey"
    }
})
export default (props) => {
    return (
        <View style={style.margem}>
            <View style={style.buttons}>
                <TouchableOpacity
                    style={style.rightButton}
                >
                    <Text style= {[style.buttonText, style.activeButton]}> Proximos </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {style.leftButton}
                    disabled={true}
                >
                    <Text style = {[style.buttonText, style.inactiveButton]}> Passados </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </View>
    )
}
