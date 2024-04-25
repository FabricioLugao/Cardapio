import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRATOS, CATEGORIAS } from "../data/mock-data";
import PratoItem from "../components/PratoItem";
import { useEffect } from "react";

function PratosVisaoGeralTela({ navigation, route }) {
  const categoriaId = route.params.categoriaId;
  const pratosVisiveis = PRATOS.filter((pratoItem) => {
    return pratoItem.categoriaIds.indexOf(categoriaId) >= 0;
  });

  useEffect(() => {
    const categoriaTitulo = CATEGORIAS.find(
      (categoria) => categoria.id == categoriaId
    ).titulo;
    console.log(categoriaTitulo);

    navigation.setOptions({
      title: categoriaTitulo,
    });
  });

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

export default PratosVisaoGeralTela;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
