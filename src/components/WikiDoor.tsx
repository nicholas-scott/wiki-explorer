import { WikiLink } from "../types"

interface WikiDoorProps {
	door: WikiLink
	openDoor: (title: string) => void
}

export const WikiDoor = ({ door, openDoor }: WikiDoorProps) => {
	const { title, url } = door
	return (
		<div
			onClick={() => {
				openDoor(title.replace(" ", "_"))
			}}
		>
			<h3>{title}</h3>
			<p>{url}</p>
		</div>
	)
}
