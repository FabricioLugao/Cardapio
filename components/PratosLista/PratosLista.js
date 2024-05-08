import { FlatList, StyleSheet, View } from "react-native";
import PratoItem from "../PratoItem";

function PratosLista({ pratosVisiveis }) {
  function renderItemPrato(itemData) {
    return (
      <PratoItem
        id={itemData.item.id}
        titulo={itemData.item.titulo}
        urlImagem={itemData.item.urlImagem}
        acessibilidadePreco={itemData.item.acessibilidadePreco}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pratosVisiveis}
        keyExtractor={(item) => item.id}
        renderItem={renderItemPrato}
      />
    </View>
  );
}

export default PratosLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
