import { WikiLink } from "../types"
import { HoverSlidingText } from "./HoverSliding"

interface WikiDoorProps {
	door: WikiLink
	onOpen: (title: string) => void
}

export const WikiDoor = ({ door, onOpen }: WikiDoorProps) => {
	const { title } = door
	return (
		<div
			onClick={() => {
				onOpen(title.replace(" ", "_"))
			}}
		>
			<HoverSlidingText text={title} width={200} />
		</div>
	)
}
