import { createContext, useState } from "react";

export const FavoritosContext = createContext({
  ids: [],
  adicionarFavorito: (id) => {},
  removerFavorito: (id) => {},
});

function FavoritosContextProvider({ children }) {
  const [pratosFavoritosIds, setPratosFavoritosIds] = useState([]);

  function adicionarFavorito(id) {
    setPratosFavoritosIds((pratosFavoritosIdsAtual) => [
      ...pratosFavoritosIdsAtual,
      id,
    ]);
  }

  function removerFavorito(id) {
    setPratosFavoritosIds((pratosFavoritosIdsAtual) =>
      pratosFavoritosIdsAtual.filter((pratoId) => pratoId != id)
    );
  }

  const value = {
    ids: pratosFavoritosIds,
    adicionarFavorito: adicionarFavorito,
    removerFavorito: removerFavorito,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
}

export default FavoritosContextProvider;
