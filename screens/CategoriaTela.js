import { FlatList } from "react-native";
import { CATEGORIAS } from "../data/mock-data";
import CategoriaGrid from "../components/CategoriaGrid";

function CategoriaTela({ navigation }) {
  function renderItemCategoria(itemData) {
    function irParaTelaVisaoGeralPratos() {
      navigation.navigate("PratosVisaoGeral", {
        categoriaId: itemData.item.id,
      });
    }

    return (
      <CategoriaGrid
        titulo={itemData.item.titulo}
        cor={itemData.item.cor}
        onPress={irParaTelaVisaoGeralPratos}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIAS}
      keyExtractor={(item) => item.id}
      renderItem={renderItemCategoria}
      numColumns={2}
    />
  );
}

export default CategoriaTela;
