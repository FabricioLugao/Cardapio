import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriaTela from "./screens/CategoriaTela";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PratosVisaoGetalTela from "./screens/PratosVisaoGeralTela";
import PratoDetalheTela from "./screens/PratoDetalheTela";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categorias" component={CategoriaTela} />
        <Stack.Screen
          name="PratosVisaoGeral"
          component={PratosVisaoGetalTela}
          options={{ title: "Pratos" }}
        />
        <Stack.Screen name="PratoDetalhe" component={PratoDetalheTela} />
      </Stack.Navigator>
    </NavigationContainer>
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
