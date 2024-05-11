import { ReactNode, createContext, useState } from 'react';
import { PersonType } from '../@types/person';

type PersonContext = {
  people: PersonType[]
  pushPerson: ({name, CPF, birthDay}: Omit<PersonType, "key">) => void
  removePerson: ({key}:{key: string}) => void
}

export const PeopleContext = createContext({} as PersonContext)

export default function PeopleProvider({children}:{children: ReactNode}) {
 const [people, setPeople] = useState<PersonType[]>([])

 const pushPerson = ({name, CPF, birthDay}: Omit<PersonType, "key">) => setPeople((oldPeople) => [...oldPeople, {name, CPF, birthDay, key: `${Math.random()}`}])

 const removePerson = ({key}:{key: string}) => setPeople((oldPeople) => [...oldPeople.filter(person => person.key !== key)])

 return (
   <PeopleContext.Provider value={{people, pushPerson, removePerson}}>
    {children}
   </PeopleContext.Provider>
  );
}