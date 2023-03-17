import axios from "axios"
import { useState, useEffect } from "react"
import { WikiPage } from "../types"

export function useWikiApi() {
	const [currentPage, setCurrentPage] = useState<WikiPage | null>(null)
	const [goalPage, setGoalPage] = useState<WikiPage | null>(null)
	const [linkToGet, setLinkToGet] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const getWikiLinks = async (pageTitle: string) => {
		setLinkToGet(pageTitle)
	}

	const innitExploration = (
		pages: { id: number; ns: number; title: string }[]
	) => {
		setLinkToGet(pages[0].title.replace(" ", "_"))
		setGoalPage({
			pageid: pages[1].id,
			title: pages[1].title,
		})
	}

	const loadPage = (page: WikiPage) => {
		if (page.links) {
			page.links = page.links.filter((link) => {
				return link.ns === 0 && link.exists
			})
			page.links.sort((a, b) => (a.title > b.title ? 1 : -1))
		}
		setCurrentPage(page)
	}

	useEffect(() => {
		const controller = new AbortController()
		let url = ""
		// If linkToGet is empty, we're starting a new exploration with random pages
		if (linkToGet === "") {
			url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnnamespace=0&rnlimit=2&origin=*`
		} else {
			url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${linkToGet}&prop=links&formatversion=2&origin=*`
		}

		setIsLoading(true)

		axios
			.get(url, {
				signal: controller.signal,
			})
			.then((resp) => {
				console.log(resp.data)
				linkToGet === ""
					? innitExploration(resp.data.query.random)
					: loadPage(resp.data.parse)
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setIsLoading(false)
			})
		return () => {
			setIsLoading(false)
			controller.abort()
		}
	}, [linkToGet])

	return { getWikiLinks, currentPage, goalPage, isLoading }
}
