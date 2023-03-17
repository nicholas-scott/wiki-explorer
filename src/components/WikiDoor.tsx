import { WikiLink } from "../types"

interface WikiDoorProps {
	door: WikiLink
	onOpen: (title: string) => void
}

export const WikiDoor = ({ door, onOpen }: WikiDoorProps) => {
	const { title, ns, exists } = door
	return (
		<div
			onClick={() => {
				onOpen(title.replace(" ", "_"))
			}}
		>
			<h3>{title}</h3>
		</div>
	)
}
