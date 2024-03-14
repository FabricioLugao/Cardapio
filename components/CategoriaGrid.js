import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoriaGrid({ titulo, cor, onPress }) {
  return (
    <View style={[styles.itemGrid, { backgroundColor: cor }]}>
      <Pressable
        android_ripple={{ color: "#CCC" }}
        style={styles.botao}
        onPress={onPress}
      >
        <View style={styles.containerInterno}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriaGrid;

const styles = StyleSheet.create({
  itemGrid: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  containerInterno: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
  },
});
