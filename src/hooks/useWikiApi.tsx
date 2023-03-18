import axios from "axios"
import { useState, useEffect } from "react"
import { WikiPage } from "../types"

export function useWikiExplorer() {
	const [goalPage, setGoalPage] = useState<WikiPage | null>(null)
	const [currentPage, setCurrentPage] = useState<WikiPage | null>(null)
	const [pageToGet, setPageToGet] = useState("")

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal
		const innitExploration = async () => {
			const urlRandomPages = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnnamespace=0&rnlimit=2&origin=*`

			await axios
				.get(urlRandomPages, { signal })
				.then(async (resp) => {
					const pages = resp.data.query.random
					const pageToGet = pages[0].title.replaceAll(" ", "_")

					setGoalPage({
						pageid: pages[1].id,
						title: pages[1].title,
					})
					console.log("page to get", pageToGet)
					fetchWikiLinks(pageToGet, signal)
				})
				.catch((err) => {
					console.log(err)
				})
		}

		innitExploration()

		return () => {
			controller.abort()
		}
	}, [])

	function fetchWikiLinks(pageTitle: string, signal: AbortSignal) {
		console.log("Fetching links for", pageTitle)
		const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${pageTitle}&prop=links&formatversion=2&origin=*`
		axios
			.get(url, { signal })
			.then((resp) => {
				const page = resp.data.parse
				console.log("Page:")
				console.log(page)
				loadPage(page)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	function loadPage(page: WikiPage) {
		if (page.links) {
			page.links = page.links.filter((link) => {
				return link.ns === 0 && link.exists
			})
			page.links.sort((a, b) => (a.title > b.title ? 1 : -1))
		}
		setCurrentPage(page)
	}

	useEffect(() => {
		if (pageToGet) {
			const controller = new AbortController()
			fetchWikiLinks(pageToGet, controller.signal)
			return () => {
				controller.abort()
			}
		}
	}, [pageToGet])

	const openDoor = (title: string) => {
		setPageToGet(title)
	}

	return { openDoor, currentPage, goalPage }
}
