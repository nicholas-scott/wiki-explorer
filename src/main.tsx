import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { WikiExplorerContextProvider } from "./store/wikiExpContextProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WikiExplorerContextProvider>
			<App />
		</WikiExplorerContextProvider>
	</React.StrictMode>
)
