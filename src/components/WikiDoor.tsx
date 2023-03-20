import { Box } from "@mui/material"
import { WikiLink } from "../types"
import { WikiDoorFace } from "./WikiDoorFace"
import { HoverSlidingText } from "./HoverSliding"

interface WikiDoorProps {
	door: WikiLink
	onOpen: (title: string) => void
}

export const WikiDoor = ({ door, onOpen }: WikiDoorProps) => {
	const { title } = door
	return (
		<Box bgcolor="primary.main" width="175px">
			<HoverSlidingText text={title} width={175} padding={10} />
			<WikiDoorFace
				onClick={() => {
					onOpen(title.replace(" ", "_"))
				}}
			/>
		</Box>
	)
}
