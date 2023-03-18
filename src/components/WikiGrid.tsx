import { WikiDoor } from "./WikiDoor"
import { useWikiExplorer } from "../hooks/useWikiApi"

export const WikiGrid = () => {
	const { openDoor, currentPage, goalPage, isLoading } = useWikiExplorer()

	return (
		<div>
			<h1>Explore</h1>
			{goalPage && <h2>Goal: {goalPage.title}</h2>}
			{currentPage && <h2>Current: {currentPage.title}</h2>}
			{currentPage?.links &&
				currentPage.links.map((wikiLink, ind) => {
					return (
						<WikiDoor
							key={`door-${ind}`}
							door={wikiLink}
							onOpen={openDoor}
						></WikiDoor>
					)
				})}
		</div>
	)
}
