import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function UrnaEletronica() {
  // Estados independentes para cada candidato
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);

  // Estado para o nome do mesário
  const [nomeMesario, setNomeMesario] = useState("");

  // Derivação de dados
  const totalVotos = votosA + votosB + votosC;

  // Cálculo das porcentagens
  const porcentagemA = totalVotos === 0 ? 0 : (votosA / totalVotos) * 100;

  const porcentagemB = totalVotos === 0 ? 0 : (votosB / totalVotos) * 100;

  const porcentagemC = totalVotos === 0 ? 0 : (votosC / totalVotos) * 100;

  // Função para zerar todos os estados
  const zerarUrna = () => {
    setVotosA(0);
    setVotosB(0);
    setVotosC(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Votação ano 2026</Text>

      {/* Mesário */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do mesário"
        value={nomeMesario}
        onChangeText={setNomeMesario}
      />

      <Text style={styles.mesario}>Mesário atual: {nomeMesario}</Text>

      {/* Candidato A */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>
          Lula Molusco: {votosA} votos ({porcentagemA.toFixed(2)}%)
        </Text>

        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosA((prev) => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar em Molusco</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato B */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>
          Bolsomiro: {votosB} votos ({porcentagemB.toFixed(2)}%)
        </Text>

        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosB((prev) => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar em Miro e atiro</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato C */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>
          Barata Ohana: {votosC} votos ({porcentagemC.toFixed(2)}%)
        </Text>

        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosC((prev) => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar em Ohana</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.rodape}>
        <Text style={styles.totalTexto}>Total de Votos: {totalVotos}</Text>

        <TouchableOpacity style={styles.botaoZerar} onPress={zerarUrna}>
          <Text style={styles.textoBotao}>Zerar Urna</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#14325A",
  },

  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  mesario: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  candidatoContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
  },

  nomeCandidato: {
    fontSize: 18,
    marginBottom: 10,
  },

  botaoVotar: {
    backgroundColor: "#00a030",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },

  rodape: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#CCC",
    paddingTop: 20,
  },

  totalTexto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  botaoZerar: {
    backgroundColor: "#808080",
    padding: 15,
    borderRadius: 5,
  },
});
