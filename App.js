import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriaTela from "./screens/CategoriaTela";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PratosVisaoGeralTela from "./screens/PratosVisaoGeralTela";
import PratoDetalheTela from "./screens/PratoDetalheTela";
import FavoritosTela from "./screens/FavoritosTela";
import { FontAwesome } from "@expo/vector-icons";
import FavoritosContextProvider from "./store/context/favoritos-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Categorias"
          component={CategoriaTela}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="cutlery" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favoritos"
          component={FavoritosTela}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <FavoritosContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PrimeiraTela"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Categorias" component={CategoriaTela} /> */}
          <Stack.Screen
            name="PratosVisaoGeral"
            component={PratosVisaoGeralTela}
            options={{ title: "Pratos" }}
          />
          <Stack.Screen name="PratoDetalhe" component={PratoDetalheTela} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
