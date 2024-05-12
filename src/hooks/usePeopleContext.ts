import { useContext } from "react"
import { PeopleContext } from "../providers/People"

export const usePeopleContext = () => {
	return useContext(PeopleContext)
}