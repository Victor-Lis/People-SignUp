import { useThemeContext } from "@/src/hooks/useThemeContext";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({text, handleSubmit}:{text: string, handleSubmit: () => void}) {
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.boxColor }]}
      onPress={handleSubmit}
    >
      <Text style={{ color: theme.text }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 20,
    },
  });
  
