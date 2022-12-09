import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text, Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function CadastroScreen({ navigation }) {
  return (
    <View       style={[
      styles.container,
      {
        flexDirection: "column",
      },
    ]}>
      <View style={styles.header}>
        <Icon name='arrow-left' size={35} onPress={() => navigation.navigate("Login")} />
        <Text h4>              Usuário </Text>
      </View>

      <View style={styles.inputs}>
        <Text> Email</Text>
        <Input />
        <Text> Senha</Text>
        <Input />
      </View>

      <View style={styles.button}>
        <Button
          title="Salvar"
          type="solid"
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4ebf2",
    flexDirection: "column",
  },

  header: {
    flex: 2,
    backgroundColor: "#3052f1",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 5,
    flexDirection: "row",
    
  },

  inputs: {
    flex: 7,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },

  button: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
});
