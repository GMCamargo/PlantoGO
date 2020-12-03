import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import TelaJardimItemLista from './TelaJardimItemLista';


const DATA_JARDINS = [
    {
        id: 'c54c3d99-3380-4623-b918-fda7508ac65c',
        img: require('../../images/orquidea.png'),
        name: 'Orquidea',
        date: '10/10/2020',
        monitor: 'Ligado'
    },
    {
        id: '5353da91-7a25-43f9-a578-637c32cf5a2a',
        img: require('../../images/girassol.png'),
        name: 'Girassol',
        date: '12/09/2020',
        monitor: 'Ligado'
    }
];

const renderItem = ({ item }) => (
    <TelaJardimItemLista name={item.name} date={item.date} monitor={item.monitor} img={item.img} />
);

const style = StyleSheet.create({
    
})

export default (props) => {
    return (
        <View>
            <FlatList
                data={DATA_JARDINS}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </View>
    )
}
