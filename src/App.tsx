import { WikiGrid } from "./components/WikiGrid"
import { useContext } from "react"
import { WikiExplorerContext } from "./store/wikiExpContextProvider"
import { Menu } from "./components/Menu"
// Game state
// 1. mainmenu/playing/finished
// 2. goal page
// 3. current page
// 4. pages visited
// 5. wikilinks from current page

function App() {
	const wikiExpState = useContext(WikiExplorerContext)

	return (
		<div className="App">
			<h1>Wiki-explorer</h1>
			{wikiExpState.mode === "MENU" && <Menu />}
			{wikiExpState.mode === "EXPLORE" && <WikiGrid />}
		</div>
	)
}

export default App
