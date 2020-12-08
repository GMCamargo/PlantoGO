import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaJardim from "../screens/TelaJardim";
import TelaAdicionarPlanta from '../screens/TelaAdicionarPlanta'
import TelaPlanta from '../screens/TelaPlanta'
import TelaPerfil from "../screens/TelaPerfil";
import LoginNavigation from '../routes/LoginNavigation'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};
const TelaLoginNavigator = () =>{
    <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="TelaLogin" component={LoginNavigation} />
        </Stack.Navigator>
}
const TelaPerfilNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
        </Stack.Navigator>
    );
}

const TelaJardimNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="TelaJardim" component={TelaJardim} />
        </Stack.Navigator>
    );
}

const TelaAdicionarPlantaNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name = "TelaAdicionarPlanta" component={TelaAdicionarPlanta}/>
        </Stack.Navigator>
    );
}

const TelaPlantaNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name = "TelaPlanta" component={TelaPlanta}/>
        </Stack.Navigator>
    );
}

export { TelaPerfilNavigator, TelaJardimNavigator, TelaAdicionarPlantaNavigator, TelaLoginNavigator, TelaPlantaNavigator };