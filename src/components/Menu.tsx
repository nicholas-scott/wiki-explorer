import { useContext } from "react"
import { WikiExplorerReducerContext } from "../store/wikiExpContextProvider"

export const Menu = () => {
	const dispatchWikiExpState = useContext(WikiExplorerReducerContext)
	return (
		<div>
			<h2>Menu</h2>
			<button
				onClick={() => {
					dispatchWikiExpState({ type: "START" })
				}}
			>
				Start game
			</button>
		</div>
	)
}
