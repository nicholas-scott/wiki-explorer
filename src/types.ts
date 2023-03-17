// Store globally used types here.
export interface WikiLink {
	title: string
	url: string
}

export type ActionType =
	| "START"
	| "STOP"
	| "FETCHING_LINKS"
	| "FETCH_SUCCESS"
	| "FETCH_ERROR"
export type ModeType = "MENU" | "EXPLORE"

export interface WikiExpState {
	mode: ModeType
}

export interface Action {
	type: ActionType
	payload?: any
}

export type WikiExpReducerType = (
	state: WikiExpState,
	action: Action
) => WikiExpState
