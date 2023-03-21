import { WikiDoor } from "./components/WikiDoor"
import { WikiGrid } from "./components/WikiGrid"
import { useWikiExplorer } from "./hooks/useWikiApi"

function App() {
	const { loadPage, currentPage, goalPage, isLoading } = useWikiExplorer()

	return (
		<div className="App">
			{goalPage && <h2>Goal: {goalPage.title}</h2>}
			{currentPage && <h2>Current: {currentPage.title}</h2>}
			<WikiGrid
				page={currentPage}
				isLoading={isLoading}
				loadPage={loadPage}
			/>
		</div>
	)
}

export default App
