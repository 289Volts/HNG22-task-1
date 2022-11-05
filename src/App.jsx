import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
	const ScrollToTop = (props) => {
		const location = useLocation();
		React.useEffect(() => {
			window.scrollTo(0, 0);
		}, [location]);

		return <>{props.children}</>;
	};
	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
