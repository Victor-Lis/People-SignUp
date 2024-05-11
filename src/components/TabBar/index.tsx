import { useContext } from "react";
import { ThemeContext } from "@/src/providers/Theme";

import { View, StyleSheet, Text } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabBar({props}:{props: BottomTabBarProps}) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.background, { backgroundColor: theme.bg }]}>
      <View style={[styles.footer, { backgroundColor: theme.secondBg }]}>
        <Link href={"/"}>
          <Feather name="home" size={20}/>
        </Link>
        <Link href={"/user"}>
          <Feather name="plus-circle" size={20}/>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 60,
    paddingBottom: 10,
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height: "100%",
    borderRadius: 10,
  },
});
