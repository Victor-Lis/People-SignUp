import { PersonType } from "@/src/@types/person";
import { useThemeContext } from "@/src/hooks/useThemeContext";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Link, useRouter } from "expo-router";
import { formatDate } from "@/src/utils/formatDate";
import { usePeopleContext } from "@/src/hooks/usePeopleContext";

export default function CardPerson({ name, CPF, birthday, id, rua, cidade, estado, CEP }: PersonType) {
  const { theme } = useThemeContext();
  const { removePerson } = usePeopleContext()
  const router = useRouter();
  return (
    <TouchableOpacity 
      style={[styles.cardContainer, { backgroundColor: theme.secondBg }]} 
      onPress={() => router.push(`user/${id}`)} 
      onLongPress={() => removePerson({id})}
    >
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
      <Text style={[styles.subTitle, { color: theme.boxColor }]}>{CEP}</Text>
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
          Rua
        </Text>
        <Text style={[styles.data, { color: theme.text }]}>
          {rua}
        </Text>
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
          Cidade
        </Text>
        <Text style={[styles.data, { color: theme.text }]}>
          {cidade}
        </Text>
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
          Estado
        </Text>
        <Text style={[styles.data, { color: theme.text }]}>
          {estado}
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
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: ".5%",
  }
});
