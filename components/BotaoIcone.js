import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function BotaoIcone({ onPress, icone }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        if (pressed) {
          return styles.pressionado;
        }
      }}
    >
      <FontAwesome name={icone} size={24} color="black" />
    </Pressable>
  );
}

export default BotaoIcone;

const styles = StyleSheet.create({
  pressionado: {
    opacity: 0.3,
  },
});
