import { ReactNode, createContext } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeType } from '../@types/theme';

import { dark } from '../themes/dark';
import { light } from '../themes/light';

type ThemeContext = {
  theme: ThemeType
}

export const ThemeContext = createContext({} as ThemeContext)

export default function ThemeProvider({children}:{children: ReactNode}) {
 const colorScheme = useColorScheme()
 return (
   <ThemeContext.Provider value={{theme: colorScheme == "light" ? light : dark}}>
    {children}
   </ThemeContext.Provider>
  );
}