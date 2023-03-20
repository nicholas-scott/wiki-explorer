import { WikiDoor } from "./WikiDoor"
import { useWikiExplorer } from "../hooks/useWikiApi"
import { Grid, Box } from "@mui/material"

export const WikiGrid = () => {
	const { openDoor, currentPage, goalPage, isLoading } = useWikiExplorer()

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			{goalPage && <h2>Goal: {goalPage.title}</h2>}
			{currentPage && <h2>Current: {currentPage.title}</h2>}
			<Grid
				display="grid"
				gridTemplateColumns={[
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
					"repeat(5, 1fr)",
					"repeat(5 1fr)",
				]}
				justifyContent="space-between"
				gap={2}
			>
				{currentPage?.links &&
					currentPage.links.map((wikiLink, ind) => {
						return (
							<Grid
								key={`door-${ind}`}
								item
								gridColumn="span 1"
								rowGap={2}
								overflow="hidden"
							>
								<WikiDoor
									door={wikiLink}
									onOpen={openDoor}
								></WikiDoor>
							</Grid>
						)
					})}
			</Grid>
		</Box>
	)
}
