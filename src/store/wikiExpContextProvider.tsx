import { createContext, useReducer } from "react"
import { Action, WikiExpState } from "../types"
import { wikiExpReducer } from "./wikiExplorerReducer"

const initialState: WikiExpState = {
	mode: "MENU",
}
export const WikiExplorerContext = createContext<WikiExpState>(initialState)
export const WikiExplorerReducerContext = createContext<React.Dispatch<Action>>(
	() => {}
)

export function WikiExplorerContextProvider({ children }: any) {
	const [wikiExpState, dispatchWikiExpState] = useReducer(
		wikiExpReducer,
		initialState
	)

	return (
		<WikiExplorerContext.Provider value={wikiExpState}>
			<WikiExplorerReducerContext.Provider value={dispatchWikiExpState}>
				{children}
			</WikiExplorerReducerContext.Provider>
		</WikiExplorerContext.Provider>
	)
}
