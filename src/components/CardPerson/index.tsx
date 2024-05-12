import { PersonType } from "@/src/@types/person";
import { useThemeContext } from "@/src/hooks/useThemeContext";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ name, CPF, birthDay, key }: PersonType) {
  const { theme } = useThemeContext();

  const formatNum = (n: number) => n < 10? '0'+n : n
  const formatDate = (date: Date) => `${formatNum(date.getDate())}/${formatNum(date.getMonth()+1)}/${date.getFullYear()}`

  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.secondBg }]}>
      <Text style={[styles.name, { color: theme.boxColor }]}>{name}</Text>
      <View style={styles.row}>
        <Text style={[styles.data, { color: theme.text, borderBottomWidth: 1, borderBottomColor: theme.boxColor }]}>CPF</Text>
        <Text style={[styles.data, { color: theme.text }]}>{CPF}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.data, { color: theme.text, borderBottomWidth: 1, borderBottomColor: theme.boxColor }]}>Aniversário</Text>
        <Text style={[styles.data, { color: theme.text }]}>{formatDate(birthDay)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: "1%",
    marginHorizontal: "7.5%",
    width: "85%",
    paddingVertical: "2.5%",
    paddingHorizontal: "5%",
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    marginBottom: ".5%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  data: {
    textAlign: "center",
    marginVertical: "1.5%",
  },
});
