import { WikiDoor } from "./WikiDoor"
import { Grid, Box } from "@mui/material"
import { WikiPage } from "../types"

interface WikiGridProps {
	page: WikiPage | null
	isLoading: boolean
	loadPage: (title: string) => void
}
//On every Grid item, apply the animation with deylay of
export const WikiGrid = ({ page, isLoading, loadPage }: WikiGridProps) => {
	return (
		<Box
			display="flex"
			flexWrap="wrap"
			maxWidth="1200px"
			justifyContent="center"
			gap={2}
		>
			{!isLoading &&
				page?.links &&
				page.links.map((wikiLink, ind) => {
					return (
						<WikiDoor
							key={`door-${ind}`}
							door={wikiLink}
							onOpen={loadPage}
						></WikiDoor>
					)
				})}
		</Box>
	)
}
