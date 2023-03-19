import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider, createTheme } from "@mui/material"
import { theme } from "./theme"
import { CssBaseline } from "@mui/material"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
