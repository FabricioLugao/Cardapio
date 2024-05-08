import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRATOS, CATEGORIAS } from "../data/mock-data";
import PratoItem from "../components/PratoItem";
import { useEffect } from "react";
import PratosLista from "../components/PratosLista/PratosLista";

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

  return <PratosLista pratosVisiveis={pratosVisiveis} />;
}

export default PratosVisaoGeralTela;
