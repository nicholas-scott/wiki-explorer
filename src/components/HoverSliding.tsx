import React, { useEffect, useRef, useState } from "react"

interface HoverSlidingTextProps {
	text: string
	width: number
}

export const HoverSlidingText = ({ text, width }: HoverSlidingTextProps) => {
	const elementRef = useRef<HTMLDivElement>(null)
	const [hovered, setHovered] = useState(false)
	const [textWidth, setTextWidth] = useState(0)
	const handleMouseEnter = () => {
		setHovered(true)
		if (elementRef.current) {
			setTextWidth(elementRef.current.offsetWidth)
		}
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}

	useEffect(() => {
		if (elementRef.current) {
			console.log(elementRef.current.textContent)
			console.log(elementRef.current.offsetWidth)
			setTextWidth(elementRef.current.offsetWidth)
		}
	}, [elementRef])

	const scrollTime = (textWidth - width) / 75

	return (
		<>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{
					width: `${width}px`,
					clipPath: "inset(0 0 0 0)",

					display: textWidth < width ? "flex" : "block",
					justifyContent: textWidth < width ? "center" : "",
				}}
			>
				<div
					ref={elementRef}
					style={{
						width: "max-content",
						transform: hovered
							? `translateX(-${textWidth - width}px)`
							: "translateX(0px)",
						transition: hovered
							? `linear ${scrollTime}s`
							: `linear ${0.2 * scrollTime}s`,
					}}
				>
					{text}
				</div>
			</div>
			<div>TextWidth: {textWidth}</div>
		</>
	)
}
// interface ClipContainerProps {
// 	width: number
// 	textWidth: number
// 	scrollTime: number
// }

// const ClipContainer = styled.div<ClipContainerProps>`
// 	background-color: green;
// 	width: ${(props) => props.width}px;
// 	clip-path: inset(0 0 0 0);
// 	display: ${(props) => (props.textWidth < props.width ? "flex" : "block")};
// 	justify-content: ${(props) =>
// 		props.textWidth < props.width ? "center" : ""};
// 	div {
// 		background-color: red;
// 		width: max-content;
// 		translate: translateX(0);
// 		transition: linear ${(props) => 0.2 * props.scrollTime}s;
// 	}

// 	hover {
// 		translate: translateX(
// 			-${(props) => {
// 					console.log(props)
// 					return props.textWidth - props.width
// 				}}px
// 		);
// 		transition: linear ${(props) => props.scrollTime}s;
// 	}
// `

// <ClipContainer
// 	width={width}
// 	textWidth={textWidth}
// 	scrollTime={scrollTime}
// >
// 	<div ref={elementRef}>{text}</div>
// </ClipContainer>
