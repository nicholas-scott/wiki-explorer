import React from "react"

interface WikiDoorProps {
	door: {
		title: string
		url: string
	}
}
export function WikiDoor({ door }: WikiDoorProps) {
	const { title, url } = door
	return (
		<div>
			<h3>{title}</h3>
			<p>{url}</p>
		</div>
	)
}
