import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Bybit from "./pages/bybit";
import Home from "./pages/home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="bybit" element={<Bybit />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
