import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import TelaPerfilItemLista from './TelaPerfilItemLista';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Regar sua Orquídea',
        desc: 'Quantidade média de água'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Regar seu Girassol',
        desc: 'Pouca quantiade de água'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Retirar Orquídea do Sol',
        desc: 'Tempo de exposição à luz solar alcançado'
    },
];
const renderItem = ({ item }) => (
    <TelaPerfilItemLista title = {item.title} desc = {item.desc}/>
  );
  
const style = StyleSheet.create({
    list:{
        alignItems: "flex-start",
        flex:5
    }
})
export default (props) => {
    return (
        <View>
            <FlatList
            data = {DATA} 
            renderItem = {renderItem} 
            keyExtractor={item => item.id}/>
        </View>
    )
}
