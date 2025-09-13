import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRoutes } from "./routes/AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";

const root = document.querySelector("#root");
if (root) {
	createRoot(root).render(
		<StrictMode>
			<AppRoutes />
		</StrictMode>
	);
}
