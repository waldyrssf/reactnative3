import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Login";
import InicialScreen from "./screens/Cadastro";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={InicialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
