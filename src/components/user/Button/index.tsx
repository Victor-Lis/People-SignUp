import { useThemeContext } from "@/src/hooks/useThemeContext";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
  text: string, 
  handleSubmit: () => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export default function Button({text, handleSubmit, style, textStyle}: ButtonProps) {
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.boxColor }, style]}
      onPress={handleSubmit}
    >
      <Text style={[{ color: theme.text }, textStyle]}>{text}</Text>
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
  
