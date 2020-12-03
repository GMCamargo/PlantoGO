import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaJardim from "../screens/TelaJardim";
import TelaAdicionarPlanta from '../screens/TelaAdicionarPlanta'
import TelaPerfil from "../screens/TelaPerfil";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

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

export { TelaPerfilNavigator, TelaJardimNavigator, TelaAdicionarPlantaNavigator };