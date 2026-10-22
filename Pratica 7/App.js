import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "./src/api";

export default function App() {
  const [utilizadores, setUtilizadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await api.get("/users");
        setUtilizadores(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar utilizadores:", error);
        setErro("Não foi possível carregar os utilizadores.");
      } finally {
        setLoading(false);
      }
    };

    buscarDados();
  }, []);

  if (loading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.mensagem}>Carregando utilizadores...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Utilizadores</Text>
      {erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : (
        <FlatList
          data={utilizadores}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.cartao}>
              <Text style={styles.nome}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.mensagem}>Nenhum utilizador encontrado.</Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  centro: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#14325A",
  },
  cartao: {
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  nome: { fontSize: 18, fontWeight: "bold" },
  email: { color: "#666", marginTop: 5 },
  mensagem: { marginTop: 10, color: "#555" },
  erro: { color: "#B00020", fontSize: 16 },
});
