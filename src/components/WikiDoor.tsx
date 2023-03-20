import { Box } from "@mui/material"
import { WikiLink } from "../types"
import { HoverSlidingText } from "./HoverSliding"

interface WikiDoorProps {
	door: WikiLink
	onOpen: (title: string) => void
}

export const WikiDoor = ({ door, onOpen }: WikiDoorProps) => {
	const { title } = door
	return (
		<Box
			onClick={() => {
				onOpen(title.replace(" ", "_"))
			}}
			bgcolor="primary.main"
		>
			<HoverSlidingText text={title} width={175} padding={10} />
			<Box width="100%" height="200px" bgcolor="secondary.main">
				text
			</Box>
		</Box>
	)
}
