import { Box } from "@mui/material"
import { useState } from "react"
interface WikiDoorFaceProps {
	onClick?: () => void
}

const imageCount = 8

export const WikiDoorFace = ({ onClick }: WikiDoorFaceProps) => {
	const [imageId, setImageId] = useState(
		Math.floor(Math.random() * imageCount) + 1
	)
	return (
		<Box bgcolor="red" border={4}>
			{imageId && (
				<Box
					bgcolor="green"
					display="block"
					onClick={onClick}
					component="img"
					width="100%"
					height="100%"
					src={`/door_${imageId}.png`}
					sx={{
						transition: "all 0.5s ease-in-out",
						transformOrigin: "left",
						"&:hover": {
							transform: "perspective(1200px)  rotateY(-25deg);",
						},
					}}
				></Box>
			)}
		</Box>
	)
}
