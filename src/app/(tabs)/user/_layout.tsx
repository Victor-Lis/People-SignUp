import Header from "@/src/components/Header";
import { useThemeContext } from "@/src/hooks/useThemeContext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Stack } from "expo-router";

export default function Layout() {
  const { theme } = useThemeContext();
  return (
    <Stack
    // tabBar={(props: BottomTabBarProps) => <TabBar props={props}/>}
    >
      <Stack.Screen
        name="create"
        options={{
          title: "Criar Usuário",
          header: (props: NativeStackHeaderProps) => (
            <Header props={props} title="Criar Usuário" />
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Editar Usuário",
          header: (props: NativeStackHeaderProps) => (
            <Header props={props} title="Editar Usuário" />
          ),
        }}
      />
    </Stack>
  );
}
