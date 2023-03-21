import { WikiDoor } from "./WikiDoor"
import { Grid, Box } from "@mui/material"
import { WikiPage } from "../types"

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

interface WikiGridProps {
	page: WikiPage | null
	isLoading: boolean
	loadPage: (title: string) => void
}
//On every Grid item, apply the animation with deylay of
export const WikiGrid = ({ page, isLoading, loadPage }: WikiGridProps) => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			{!isLoading && (
				<Grid
					display="grid"
					gridTemplateColumns={[
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
						"repeat(5, 1fr)",
						"repeat(5, 1fr)",
						"repeat(5 1fr)",
					]}
					justifyContent="space-between"
					gap={2}
				>
					{page?.links &&
						page.links.map((wikiLink, ind) => {
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
										onOpen={loadPage}
									></WikiDoor>
								</Grid>
							)
						})}
				</Grid>
			)}
		</Box>
	)
}
