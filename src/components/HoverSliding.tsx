import React, { useEffect, useRef, useState } from "react"

interface HoverSlidingTextProps {
	text: string
	width: number
	padding: number
}

export const HoverSlidingText = ({
	text,
	width,
	padding,
}: HoverSlidingTextProps) => {
	const elementRef = useRef<HTMLDivElement>(null)
	const [hovered, setHovered] = useState(false)
	const [textWidth, setTextWidth] = useState(0)
	const handleMouseEnter = () => {
		textWidth
		setHovered(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}

	useEffect(() => {
		if (elementRef.current) {
			setTextWidth(elementRef.current.offsetWidth)
		}
	}, [elementRef, elementRef.current, text])

	const scrollTime = (textWidth - width + padding * 2) / 75
	const inset =
		padding == 0
			? "inset(0 0 0 0)"
			: `inset(${padding}px ${padding}px ${padding}px ${padding}px)`
	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				width: `${width}px`,
				clipPath: inset,
				backgroundColor: "green",
				display: textWidth < width - padding * 2 ? "flex" : "block",
				justifyContent: textWidth < width ? "center" : "",
				padding: `${padding}px`,
			}}
		>
			<div
				ref={elementRef}
				style={{
					width: "max-content",

					transform: hovered
						? `translateX(-${textWidth - width + padding * 2}px)`
						: "translateX(0px)",
					transition: hovered
						? `linear ${scrollTime}s`
						: `linear ${0.2 * scrollTime}s`,
				}}
			>
				{text}
			</div>
		</div>
	)
}
