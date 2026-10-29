import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
export default function Contador() {
const [contagem, setContagem] = useState(0);
return (
<View style={styles.container}>
<Text style={styles.titulo}>"Contagem Atual:"</Text>
<Text style={styles.numero}>{contagem}</Text>
			<View style={styles.buttonsRow}>
				<View style={styles.buttonWrap}>
					<Button
						title="Incrementar +1"
						onPress={() => setContagem((prev) => prev + 1)}
					/>
				</View>

				<View style={styles.buttonWrap}>
					<Button
						title="Decrementar -1"
						onPress={() => setContagem((prev) => Math.max(0, prev - 1))}
					/>
				</View>

				<View style={styles.buttonWrap}>
					<Button title="Zerar" onPress={() => setContagem(0)} />
				</View>
			</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#ffffff"
},
titulo: {
fontSize: 20,
color: "#333333"
},
numero: {
fontSize: 48,
fontWeight: "bold",
color: "#4caf50",
marginBottom: 20
}
,
buttonsRow: {
	marginTop: 12,
	width: "80%",
	flexDirection: "row",
	justifyContent: "space-between"
},
buttonWrap: {
	flex: 1,
	marginHorizontal: 6
}
});