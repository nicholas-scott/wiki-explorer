import { WikiDoor } from "./components/WikiDoor"
import { WikiGrid } from "./components/WikiGrid"
import { useWikiExplorer } from "./hooks/useWikiApi"
import { Box } from "@mui/material"

function App() {
	const { loadPage, currentPage, goalPage, isLoading } = useWikiExplorer()

	return (
		<Box
			className="App"
			display="flex"
			flexDirection="column"
			alignItems="center"
			paddingBottom={4}
		>
			{goalPage && <h2>Goal: {goalPage.title}</h2>}
			{currentPage && <h2>Current: {currentPage.title}</h2>}
			<WikiGrid
				page={currentPage}
				isLoading={isLoading}
				loadPage={loadPage}
			/>
		</Box>
	)
}

export default App
