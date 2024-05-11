import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useColorScheme } from "react-native";
import { Tabs } from "expo-router";

import ThemeProvider from "./../../providers/Theme";
import { dark } from "../../themes/dark";
import { light } from "../../themes/light";

import Header from "@/src/components/Header";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  const theme = useColorScheme() === "light" ? light : dark;
  return (
    <>
      <ExpoStatusBar backgroundColor={theme.bg} />
      <ThemeProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: theme.bg,
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarStyle: {
              backgroundColor: theme.secondBg,
              borderWidth: 0,
              height: 50,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Usuários",
              header: (props: BottomTabHeaderProps) => (
                <Header props={props} title="Usuários" />
              ),
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Feather
                    color={color}
                    name="users"
                    size={size * 1.25}
                    style={
                      focused && {
                        padding: 10,
                        backgroundColor: theme.text,
                        borderRadius: 100,

                        position: "absolute",
                        bottom: 10,
                      }
                    }
                  />
                );
              },
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              title: "Criar Usuário",
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Feather
                    color={color}
                    name="user-plus"
                    size={size * 1.25}
                    style={
                      focused && {
                        padding: 10,
                        backgroundColor: theme.text,
                        borderRadius: 100,

                        position: "absolute",
                        bottom: 10,
                      }
                    }
                  />
                );
              },
            }}
          />
        </Tabs>
      </ThemeProvider>
    </>
  );
}
