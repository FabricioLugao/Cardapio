import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRATOS } from "../data/mock-data";
import Lista from "../components/PratoDetalhe/Lista";

function PratoDetalheTela({ route }) {
  const pratoId = route.params.pratoId;

  const pratoSelecionado = PRATOS.find((prato) => prato.id == pratoId);

  return (
    <ScrollView>
      <Image
        source={{ uri: pratoSelecionado.urlImagem }}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>{pratoSelecionado.titulo}</Text>
      <View style={styles.detalhes}>
        <Text>{pratoSelecionado.acessibilidadePreco.toUpperCase()}</Text>
      </View>
      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Lista dados={pratoSelecionado.ingredientes} />
      <Text style={styles.subtitulo}>Passo a passo</Text>
      <Lista dados={pratoSelecionado.passos} />
    </ScrollView>
  );
}

export default PratoDetalheTela;

const styles = StyleSheet.create({
  imagem: {
    width: "100%",
    height: 350,
  },
  detalhes: {
    padding: 8,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    margin: 6,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
  },
});
