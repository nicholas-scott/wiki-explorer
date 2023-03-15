import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { WikiGrid } from "./components/WikiGrid"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<h1>hello world</h1>
			<WikiGrid />
		</div>
	)
}

export default App
