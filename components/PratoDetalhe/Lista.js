import { Text, View, StyleSheet } from "react-native";

function Lista({ dados }) {
  return dados.map((dado) => (
    <View key={dado} style={styles.itemLista}>
      <Text style={styles.itemTexto}>{dado}</Text>
    </View>
  ));
}

export default Lista;

const styles = StyleSheet.create({
  itemLista: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#555",
  },
  itemTexto: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
