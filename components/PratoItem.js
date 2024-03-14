import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PratoItem({ id, titulo, urlImagem, acessibilidadePreco }) {
  const navigation = useNavigation();

  function irParaTelaDeDetalhe() {
    navigation.navigate("PratoDetalhe", {
      pratoId: id,
    });
  }

  return (
    <View style={styles.pratoItem}>
      <Pressable
        android_ripple={{ color: "#00000088" }}
        onPress={irParaTelaDeDetalhe}
      >
        <View>
          <Image source={{ uri: urlImagem }} style={styles.imagem} />
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
        <View style={styles.detalhes}>
          <Text>{acessibilidadePreco.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PratoItem;

const styles = StyleSheet.create({
  pratoItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
  },
  detalhes: {
    padding: 8,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  imagem: {
    width: "100%",
    height: 200,
  },
});
