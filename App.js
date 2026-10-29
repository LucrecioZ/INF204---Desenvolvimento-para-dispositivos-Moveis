import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import JogoDaVelha from "./JogoDaVelha";

export default function App() {
  const [nome1, setNome1] = useState("Lucrecio Lourenço");
  const [nome2, setNome2] = useState("Lucas Augusto");
  const [nome3, setNome3] = useState("Lukinhaz");

  const [seguindo1, setSeguindo1] = useState(false);
  const [seguindo2, setSeguindo2] = useState(false);
  const [seguindo3, setSeguindo3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* PERFIL 1 */}
      <View style={styles.cartao}>
        <Text style={styles.nomeUsuario}>{nome1}</Text>

        <Text style={styles.profissao}>
          Desenvolvedor Full-Stack
        </Text>

        <TouchableOpacity
          style={[
            styles.botao,
            seguindo1 && styles.botaoDesativado,
          ]}
          onPress={() => setSeguindo1(!seguindo1)}
        >
          <Text style={styles.textoBotao}>
            {seguindo1 ? "Já Seguindo" : "Seguir"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Alterar nome..."
          value={nome1}
          onChangeText={(texto) => setNome1(texto)}
        />
      </View>


      {/* PERFIL 2 */}
      <View style={styles.cartao}>
        <Text style={styles.nomeUsuario}>{nome2}</Text>

        <Text style={styles.profissao}>
            Analista de suporte
        </Text>

        <TouchableOpacity
          style={[
            styles.botao,
            seguindo2 && styles.botaoDesativado,
          ]}
          onPress={() => setSeguindo2(!seguindo2)}
        >
          <Text style={styles.textoBotao}>
            {seguindo2 ? "Já Seguindo" : "Seguir"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Alterar nome..."
          value={nome2}
          onChangeText={(texto) => setNome2(texto)}
        />
      </View>


      {/* PERFIL 3 */}
      <View style={styles.cartao}>
        <Text style={styles.nomeUsuario}>{nome3}</Text>

        <Text style={styles.profissao}>
          Desenvolvedor de Games
        </Text>

        <TouchableOpacity
          style={[
            styles.botao,
            seguindo3 && styles.botaoDesativado,
          ]}
          onPress={() => setSeguindo3(!seguindo3)}
        >
          <Text style={styles.textoBotao}>
            {seguindo3 ? "Já Seguindo" : "Seguir"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Alterar nome..."
          value={nome3}
          onChangeText={(texto) => setNome3(texto)}
        />
      </View>


      {/* JOGO DA VELHA */}
      <JogoDaVelha />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingVertical: 30,
  },

  cartao: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  nomeUsuario: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 5,
  },

  profissao: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#0064A0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },

  botaoDesativado: {
    backgroundColor: "#808080",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
});