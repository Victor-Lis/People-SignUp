import { ReactNode, createContext, useState } from 'react';
import { PersonType } from '../@types/person';

type PersonContext = {
  people: PersonType[]
  pushPerson: ({name, CPF, birthDay}: Omit<PersonType, "key">) => void
  removePerson: ({key}:{key: string}) => void
}

export const PeopleContext = createContext({} as PersonContext)

export default function PeopleProvider({children}:{children: ReactNode}) {
 const [people, setPeople] = useState<PersonType[]>([
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
  {
    name: "Victor",
    birthDay: new Date(),
    CPF: '520320940-50',
    key: `491249120`
  },
 ])

 const pushPerson = ({name, CPF, birthDay}: Omit<PersonType, "key">) => setPeople((oldPeople) => [...oldPeople, {name, CPF, birthDay, key: `${Math.random()}`}])

 const removePerson = ({key}:{key: string}) => setPeople((oldPeople) => [...oldPeople.filter(person => person.key !== key)])

 return (
   <PeopleContext.Provider value={{people, pushPerson, removePerson}}>
    {children}
   </PeopleContext.Provider>
  );
}