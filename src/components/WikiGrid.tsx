import { useContext } from "react"
import axios from "axios"
import { WikiExplorerReducerContext } from "../store/wikiExpContextProvider"
import { WikiDoor } from "./WikiDoor"

const wikiLinks = [
	{
		title: "Matthew Quay",
		url: "https://en.wikipedia.org/wiki/Matthew_Quay",
	},
	{
		title: "NASA",
		url: "https://en.wikipedia.org/wiki/NASA",
	},
	{
		title: "Space Shuttle",
		url: "https://en.wikipedia.org/wiki/Space_Shuttle",
	},
	{
		title: "International Space Station",
		url: "https://en.wikipedia.org/wiki/International_Space_Station",
	},
]

export const WikiGrid = () => {
	const dispatchWikiExpState = useContext(WikiExplorerReducerContext)

	const fetchData = async (title: string) => {
		const link = `https://en.wikipedia.org/w/api.php?action=parse&format=json&title=${title}&prop=links&formatversion=2&origin=*`
		dispatchWikiExpState({ type: "FETCHING_LINKS" })
		try {
			const resp = await axios.get(link)
			console.log(resp.data.parse)
			dispatchWikiExpState({ type: "FETCH_SUCCESS" })
		} catch (err) {
			console.log(err)
			dispatchWikiExpState({ type: "FETCH_ERROR" })
		}
	}

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
							openDoor={fetchData}
						></WikiDoor>
					)
				})}
		</div>
	)
}
