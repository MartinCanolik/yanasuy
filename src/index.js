import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</BrowserRouter>
	</>,
	document.getElementById("root")
);
