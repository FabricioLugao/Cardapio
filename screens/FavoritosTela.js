import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritosContext } from "../store/context/favoritos-context";
import { PRATOS } from "../data/mock-data";
import PratosLista from "../components/PratosLista/PratosLista";

function FavoritosTela() {
  const pratosFavoritosCtx = useContext(FavoritosContext);
  const pratosFavoritos = PRATOS.filter((prato) =>
    pratosFavoritosCtx.ids.includes(prato.id)
  );

  if (pratosFavoritos.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Você ainda não tem nenhum prato favorito
        </Text>
      </View>
    );
  }

  return <PratosLista pratosVisiveis={pratosFavoritos} />;
}

export default FavoritosTela;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
