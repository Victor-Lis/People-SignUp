import { useContext } from "react"
import { ThemeContext } from "../providers/Theme"

export const useThemeContext = () => {
	return useContext(ThemeContext)
}