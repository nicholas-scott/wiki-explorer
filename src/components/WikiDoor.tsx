import { Box } from "@mui/material"
import { WikiLink } from "../types"
import { WikiDoorFace } from "./WikiDoorFace"
import { HoverSlidingText } from "./HoverSliding"

interface WikiDoorProps {
	door: WikiLink
	onOpen: (title: string) => void
}
const animationsx = {
	transition: "all 0.5s ease-in-out",
	"@keyframes appear": {
		from: {
			transform: "scale(0)",
		},
		to: {
			transform: "scale(1)",
		},
	},
	animation: "appear 0.5s ease-in-out",
}

export const WikiDoor = ({ door, onOpen }: WikiDoorProps) => {
	const { title } = door
	return (
		<Box width="175px" sx={animationsx}>
			<HoverSlidingText text={title} width={175} padding={5} />
			<WikiDoorFace
				onClick={() => {
					onOpen(title.replace(" ", "_"))
				}}
			/>
		</Box>
	)
}
