import { CssBaseline, GeistProvider, Tabs, Text } from "@geist-ui/core";
import "./App.css";
import Landing from "./Landing";
import "inter-ui/inter.css";
import SplashCursor from "./components/SplashCursor";

function App() {
	return (
		<GeistProvider themeType="dark">
			<CssBaseline />
			<Landing />
		</GeistProvider>
	);
}

export default App;
