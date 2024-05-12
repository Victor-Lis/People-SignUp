import { PersonType } from "@/src/@types/person";
import { useThemeContext } from "@/src/hooks/useThemeContext";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Link, useRouter } from "expo-router";

export default function CardPerson({ name, CPF, birthday, id }: PersonType) {
  const { theme } = useThemeContext();
  const router = useRouter();

  const formatNum = (n: number) => (n < 10 ? "0" + n : n);
  const formatDate = (date: Date) =>
    `${formatNum(date.getDate())}/${formatNum(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;

  return (
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor: theme.secondBg }]} onLongPress={() => {router.push(`user/${id}`)}}>
      <Text style={[styles.name, { color: theme.boxColor }]}>{name}</Text>
      <View style={styles.row}>
        <Text
          style={[
            styles.data,
            {
              color: theme.text,
              borderBottomWidth: 1,
              borderBottomColor: theme.boxColor,
            },
          ]}
        >
          CPF
        </Text>
        <Text style={[styles.data, { color: theme.text }]}>{CPF}</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={[
            styles.data,
            {
              color: theme.text,
              borderBottomWidth: 1,
              borderBottomColor: theme.boxColor,
            },
          ]}
        >
          Aniversário
        </Text>
        <Text style={[styles.data, { color: theme.text }]}>
          {formatDate(birthday)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: "1%",
    marginHorizontal: "auto",
    width: "90%",
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
