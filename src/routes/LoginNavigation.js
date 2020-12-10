import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaJardim from "../screens/TelaJardim";
import TelaAdicionarPlanta from '../screens/TelaAdicionarPlanta'
import TelaEditarPlanta from '../screens/TelaEditarPlanta'
import TelaPerfil from "../screens/TelaPerfil";
import TelaLogin from "../screens/TelaLogin";
import Navigation from "./Navegation";
import TelaPlanta from "../screens/TelaPlanta";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

export default (props) => (
    <Stack.Navigator screenOptions= {screenOptionStyle}>
      <Stack.Screen name="TelaLogin" component={TelaLogin} />
      <Stack.Screen name="MainNavigator" component={Navigation} />
      <Stack.Screen name="TelaPlanta" component = {TelaPlanta}/>
      <Stack.Screen name="TelaEditarPlanta" component = {TelaEditarPlanta}/>
    </Stack.Navigator>
  );