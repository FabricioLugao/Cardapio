import { createContext } from "react";

export const FavoritosContext = createContext({
  ids: [],
  adicionarFavorito: (id) => {},
  removerFavorito: (id) => {},
});

function FavoritosContextProvider({ children }) {
  return <FavoritosContext.Provider>{children}</FavoritosContext.Provider>;
}

export default FavoritosContextProvider;
