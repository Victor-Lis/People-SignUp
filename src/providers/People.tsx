import { ReactNode, createContext, useEffect, useState } from "react";
import { PersonType } from "../@types/person";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../utils/showToast";

type PersonContext = {
  people: PersonType[];
  pushPerson: ({ name, CPF, birthday }: Omit<PersonType, "id">) => void;
  updatePerson: ({ id, name, CPF, birthday }: PersonType) => void;
  removePerson: ({ id }: { id: string }) => void;
  loadAsyncData: () => void;
};

export const PeopleContext = createContext({} as PersonContext);

export default function PeopleProvider({ children }: { children: ReactNode }) {
  const [people, setPeople] = useState<PersonType[]>([]);

  const pushPerson = ({ name, CPF, birthday }: Omit<PersonType, "id">) => {
    let id = `${Math.random()}`;
    setPeople((oldPeople) => [...oldPeople, { name, CPF, birthday, id }]);
    saveAsyncData([...people, { name, CPF, birthday, id }]);
  };

  const updatePerson = ({ id, name, CPF, birthday }: PersonType) => {
    setPeople((oldPeople) => [
      ...oldPeople.filter((person) => person.id !== id),
      { name, CPF, birthday, id },
    ]);
    saveAsyncData([
      ...people.filter((person) => person.id !== id),
      { name, CPF, birthday, id },
    ]);
  };

  const removePerson = ({ id }: { id: string }) => {
    setPeople((oldPeople) => [
      ...oldPeople.filter((person) => person.id !== id),
    ]);
    saveAsyncData([...people.filter((person) => person.id !== id)]);
  };

  const loadAsyncData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("@people");
      if (storedData !== null) {
        const parsedData: PersonType[] = JSON.parse(storedData);
        parsedData.forEach((person) => {
          person.birthday = new Date(person.birthday);
        });
        setPeople(parsedData);
      }
      showToast("Dados locais foram pegos!");
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

  const saveAsyncData = async (p: PersonType[]) => {
    try {
      const stringifiedData = await JSON.stringify(p);
      await AsyncStorage.setItem("@people", stringifiedData);
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };
  return (
    <PeopleContext.Provider
      value={{ people, pushPerson, updatePerson, removePerson, loadAsyncData }}
    >
      {children}
    </PeopleContext.Provider>
  );
}
