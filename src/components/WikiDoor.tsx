import React from "react"
import { WikiLink } from "../types"

interface WikiDoorProps {
	door: WikiLink
}

export const WikiDoor = ({ door }: WikiDoorProps) => {
	const { title, url } = door
	return (
		<div>
			<h3>{title}</h3>
			<p>{url}</p>
		</div>
	)
}
