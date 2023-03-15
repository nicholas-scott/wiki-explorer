import { WikiExpReducerType } from "../types"

export const wikiExpReducer: WikiExpReducerType = (state, action) => {
	switch (action.type) {
		case "START":
			return {
				...state,
				mode: "EXPLORE",
			}
		case "STOP":
			return {
				...state,
				mode: "MENU",
			}
		default:
			return state
	}
}
