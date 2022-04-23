import { Home } from "pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</BrowserRouter>
	);
};
