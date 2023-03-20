// Store globally used types here.
export interface WikiLink {
	title: string
	exists: boolean
	ns: number
}

export interface WikiPage {
	title: string
	pageid: number
	links?: WikiLink[]
}
