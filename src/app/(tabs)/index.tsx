import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useThemeContext } from "@/src/hooks/useThemeContext";
import { usePeopleContext } from "@/src/hooks/usePeopleContext";
import Card from "../../components/CardPerson";

export default function app() {
  const { theme } = useThemeContext();
  const { people } = usePeopleContext();
  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <FlatList
        style={{
          marginVertical: "2.5%",
        }}
        data={people}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={({ key }) => key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
