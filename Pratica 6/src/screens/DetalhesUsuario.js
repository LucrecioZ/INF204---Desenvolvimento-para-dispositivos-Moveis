import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DetalhesUsuario({ route, navigation }) {
// Desestruturando o parametro recebido da navegacao
const { nomeUsuario } = route.params;
return (
<View style={styles.container}>
<Text style={styles.titulo}>Detalhes do Perfil de {nomeUsuario}</Text>
<Text style={styles.texto}>Me chamo Lucas, tenho 22 anos e sou estudante de ADS na Univiçosa.</Text>
<Text style={styles.texto}>Sou apaixonado por tecnologia e programação, e estou sempre em busca de aprender coisas novas.</Text>
<TouchableOpacity
style={styles.botaoVoltar}
onPress={() => navigation.goBack()}
activeOpacity={0.7}
>
<Text style={styles.textoBotao}>Voltar</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
texto: { fontSize: 18, color: "#555", textAlign: "center", marginBottom: 10 },
botaoVoltar: { backgroundColor: "#200050", borderRadius: 3, marginTop: 16, paddingHorizontal: 24, paddingVertical: 12 },
textoBotao: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
