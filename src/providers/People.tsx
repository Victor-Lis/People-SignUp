import { ReactNode, createContext, useState } from 'react';
import { PersonType } from '../@types/person';

type PersonContext = {
  people: PersonType[]
  pushPerson: ({name, CPF, birthday}: Omit<PersonType, "id">) => void
  removePerson: ({id}:{id: string}) => void
}

export const PeopleContext = createContext({} as PersonContext)

export default function PeopleProvider({children}:{children: ReactNode}) {
 const [people, setPeople] = useState<PersonType[]>([
  {
    name: "Victor",
    birthday: new Date(),
    CPF: '520320940-50',
    id: `491249120`
  },
 ])

 const pushPerson = ({name, CPF, birthday}: Omit<PersonType, "id">) => setPeople((oldPeople) => [...oldPeople, {name, CPF, birthday, id: `${Math.random()}`}])

 const removePerson = ({id}:{id: string}) => setPeople((oldPeople) => [...oldPeople.filter(person => person.id !== id)])

 return (
   <PeopleContext.Provider value={{people, pushPerson, removePerson}}>
    {children}
   </PeopleContext.Provider>
  );
}