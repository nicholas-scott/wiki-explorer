import { Box } from "@mui/material"
import { useState } from "react"
//import the different colors defined by mui
import { colors } from "@mui/material/"

const getRandomMuiColor = () => {
	const muiColors = Object.keys(colors)
	const indexOfCommon = muiColors.indexOf("common")
	muiColors.splice(indexOfCommon, 1)
	const randomColor = muiColors[Math.floor(Math.random() * muiColors.length)]
	//@ts-ignore
	const randomColorShades = Object.keys(colors[randomColor])
	const randomShade =
		randomColorShades[Math.floor(Math.random() * randomColorShades.length)]
	//@ts-ignore
	const randomColorValue = colors[randomColor][randomShade]
	return randomColorValue
}
interface WikiDoorFaceProps {
	onClick?: () => void
}

const imageCount = 8

export const WikiDoorFace = ({ onClick }: WikiDoorFaceProps) => {
	const [imageId, setImageId] = useState(
		Math.floor(Math.random() * imageCount) + 1
	)
	const [color, setColor] = useState(getRandomMuiColor())

	return (
		<Box
			bgcolor="#333333"
			border={4}
			borderColor="#636363
		"
		>
			{imageId && (
				<Box
					bgcolor={color}
					color="white"
					display="block"
					onClick={onClick}
					component="img"
					width="100%"
					height="100%"
					src={`/door_${imageId}.png`}
					sx={{
						transition: "all 0.2s ease-in-out",
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
