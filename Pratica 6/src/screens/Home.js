import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Portifólio Lucrecio Zik4</Text>
      <Button
        title="Ver sobre o Lucrecio"
        onPress={() => navigation.navigate("Detalhes", { nomeUsuario: "Lucas 'Lucrecio' Lourenço" })}
      />
    </View>
  );
}