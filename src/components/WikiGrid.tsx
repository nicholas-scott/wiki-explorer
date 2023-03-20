import { WikiDoor } from "./WikiDoor"
import { useWikiExplorer } from "../hooks/useWikiApi"
import { Grid, Box } from "@mui/material"
import css from "@emotion/css"
import { keyframes } from "@emotion/react"

const animationsx = {
	transition: "all 0.5s ease-in-out",
	"@keyframes appear": {
		from: {
			transform: "scale(0)",
		},
		to: {
			transform: "scale(1)",
		},
	},
	animation: "appear 0.5s ease-in-out",
}

//On every Grid item, apply the animation with deylay of
export const WikiGrid = () => {
	const { openDoor, currentPage, goalPage, isLoading } = useWikiExplorer()

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			{goalPage && <h2>Goal: {goalPage.title}</h2>}
			{currentPage && <h2>Current: {currentPage.title}</h2>}
			{/* {isLoading && <h2>Loading...</h2>} */}
			{!isLoading && (
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
									sx={animationsx}
								>
									<WikiDoor
										door={wikiLink}
										onOpen={openDoor}
									></WikiDoor>
								</Grid>
							)
						})}
				</Grid>
			)}
		</Box>
	)
}
