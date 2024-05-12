import { ReactNode, createContext, useState } from 'react';
import { PersonType } from '../@types/person';

type PersonContext = {
  people: PersonType[]
  pushPerson: ({name, CPF, birthday}: Omit<PersonType, "id">) => void
  updatePerson: ({id, name, CPF, birthday}: PersonType) => void
  removePerson: ({id}:{id: string}) => void
}

export const PeopleContext = createContext({} as PersonContext)

export default function PeopleProvider({children}:{children: ReactNode}) {
 const [people, setPeople] = useState<PersonType[]>([])

 const pushPerson = ({name, CPF, birthday}: Omit<PersonType, "id">) => setPeople((oldPeople) => [...oldPeople, {name, CPF, birthday, id: `${Math.random()}`}])

 const updatePerson = ({id, name, CPF, birthday}: PersonType) => setPeople((oldPeople) => [...oldPeople.filter(person => person.id !== id), {name, CPF, birthday, id}])
 
 const removePerson = ({id}:{id: string}) => setPeople((oldPeople) => [...oldPeople.filter(person => person.id !== id)])

 return (
   <PeopleContext.Provider value={{people, pushPerson, updatePerson, removePerson}}>
    {children}
   </PeopleContext.Provider>
  );
}