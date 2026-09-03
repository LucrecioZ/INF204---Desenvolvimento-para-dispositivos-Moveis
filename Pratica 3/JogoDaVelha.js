import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function JogoDaVelha() {
  const [vez, setVez] = useState("X");
  const [tabuleiro, setTabuleiro] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const jogar = (index) => {
    // Não deixa clicar em uma célula que já foi preenchida
    if (tabuleiro[index] !== "") {
      return;
    }

    const novoTabuleiro = [...tabuleiro];

    novoTabuleiro[index] = vez;

    setTabuleiro(novoTabuleiro);

    // Troca a vez
    setVez(vez === "X" ? "O" : "X");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Velha</Text>

      <Text style={styles.vez}>
        Vez do jogador: {vez}
      </Text>

      {/* Primeira linha */}
      <View style={styles.linha}>
        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(0)}
        >
          <Text style={styles.simbolo}>{tabuleiro[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(1)}
        >
          <Text style={styles.simbolo}>{tabuleiro[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(2)}
        >
          <Text style={styles.simbolo}>{tabuleiro[2]}</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda linha */}
      <View style={styles.linha}>
        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(3)}
        >
          <Text style={styles.simbolo}>{tabuleiro[3]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(4)}
        >
          <Text style={styles.simbolo}>{tabuleiro[4]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(5)}
        >
          <Text style={styles.simbolo}>{tabuleiro[5]}</Text>
        </TouchableOpacity>
      </View>

      {/* Terceira linha */}
      <View style={styles.linha}>
        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(6)}
        >
          <Text style={styles.simbolo}>{tabuleiro[6]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(7)}
        >
          <Text style={styles.simbolo}>{tabuleiro[7]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.celula}
          onPress={() => jogar(8)}
        >
          <Text style={styles.simbolo}>{tabuleiro[8]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 10,
  },

  vez: {
    fontSize: 16,
    marginBottom: 15,
  },

  linha: {
    flexDirection: "row",
  },

  celula: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  simbolo: {
    fontSize: 32,
    fontWeight: "bold",
  },
});