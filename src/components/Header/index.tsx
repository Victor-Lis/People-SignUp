import { useContext } from "react";
import { ThemeContext } from "@/src/providers/Theme";

import { View, StyleSheet, Text } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export default function Header({props, title}:{props: BottomTabHeaderProps | NativeStackHeaderProps, title: string}) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.background, { backgroundColor: theme.bg }]}>
      <View style={[styles.footer, { backgroundColor: theme.secondBg }]}>
        <Text style={{color: theme.text, fontSize: 20, fontWeight: "bold"}}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 60,
    paddingTop: 10,
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
});
