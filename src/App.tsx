import { WikiDoor } from "./components/WikiDoor"
import { WikiGrid } from "./components/WikiGrid"
import { useWikiExplorer } from "./hooks/useWikiApi"
import { Box } from "@mui/material"

function App() {
	const { loadPage, visitedPages, goalPage, isLoading } = useWikiExplorer()
	const currentPage = visitedPages.length
		? visitedPages[visitedPages.length - 1]
		: null

	return (
		<Box
			className="App"
			display="flex"
			flexDirection="column"
			alignItems="center"
			paddingBottom={4}
		>
			{goalPage && <h3 style={{ margin: 0 }}>Goal: {goalPage.title}</h3>}
			{currentPage && (
				<h3 style={{ margin: 0 }}>Current: {currentPage.title}</h3>
			)}
			<WikiGrid
				page={currentPage}
				isLoading={isLoading}
				loadPage={loadPage}
			/>
		</Box>
	)
}

export default App
