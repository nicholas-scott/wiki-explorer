import { useContext } from "react"
import { WikiExplorerReducerContext } from "../store/wikiExpContextProvider"
import { WikiDoor } from "./WikiDoor"

const wikiLinks = [
	{
		title: "Matthew Quay",
		url: "https://en.wikipedia.org/wiki/Matthew_Quay",
	},
	{ title: "NASA", url: "https://en.wikipedia.org/wiki/NASA" },
	{
		title: "Space Shuttle",
		url: "https://en.wikipedia.org/wiki/Space_Shuttle",
	},
	{ title: "SpaceX", url: "https://en.wikipedia.org/wiki/SpaceX" },
	{
		title: "International Space Station",
		url: "https://en.wikipedia.org/wiki/International_Space_Station",
	},
]

export const WikiGrid = ({}) => {
	const dispatchWikiExpState = useContext(WikiExplorerReducerContext)
	//render all links as list in div with h1 for title, p for url
	return (
		<div>
			<h2>Explore</h2>
			<button
				onClick={() => {
					dispatchWikiExpState({ type: "STOP" })
				}}
			>
				Stop Game
			</button>
			{wikiLinks &&
				wikiLinks.map((wikiLink, ind) => {
					return (
						<WikiDoor
							key={`door-${ind}`}
							door={wikiLink}
						></WikiDoor>
					)
				})}
		</div>
	)
}
