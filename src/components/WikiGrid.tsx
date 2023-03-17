import { WikiDoor } from "./WikiDoor"
import { useWikiApi } from "../hooks/useWikiApi"

export const WikiGrid = () => {
	const { getWikiLinks, currentPage, goalPage } = useWikiApi()

	return (
		<div>
			<h2>Explore</h2>
			{currentPage?.links &&
				currentPage.links.map((wikiLink, ind) => {
					return (
						<WikiDoor
							key={`door-${ind}`}
							door={wikiLink}
							onOpen={getWikiLinks}
						></WikiDoor>
					)
				})}
		</div>
	)
}

/*
const dispatchWikiExpState = useContext(WikiExplorerReducerContext)
	const wikiExpState = useContext(WikiExplorerContext)
	
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

	useEffect(() => {
		if (wikiExpState.mode === "EXPLORE" && !wikiExpState.isLoading) {
			console.log("STARTED EXPLORING")
			fetchData()
		}
	}, [wikiExpState.mode, wikiExpState.isLoading])
*/
