import { createTheme } from "@mui/material"

export const theme = createTheme({
	palette: {
		primary: {
			main: "#84DA72",
		},
		secondary: {
			main: "#f5f5f5",
		},
	},
})

const test = {
	breakpoints: ["40em", "52em", "64em"],
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	colors: {
		blue: "#07c",
		lightgray: "#f6f6ff",
		green: "#84DA72",
		orangegreen: "#A8DAA8",
	},
	pallete: {
		primary: {
			main: "84DA72",
			light: "A8DAA8",
			dark: "5BAA4B",
		},
		secondary: "#A8DAA8",
		tertiary: "#84DA72",
		green: "#84DA72",
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		body: "system-ui, sans-serif",
		heading: "inherit",
		monospace: "Menlo, monospace",
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	shadows: {
		small: "0 0 4px rgba(0, 0, 0, .125)",
		large: "0 0 24px rgba(0, 0, 0, .125)",
	},
	variants: {},
	text: {},
	buttons: {
		primary: {
			color: "white",
			bg: "primary",
		},
	},
}
