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

export function WikiGrid() {
	//render all links as list in div with h1 for title, p for url
	return (
		<div>
			{wikiLinks &&
				wikiLinks.map((wikiLink) => {
					return <WikiDoor door={wikiLink}></WikiDoor>
				})}
		</div>
	)
}
