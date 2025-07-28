import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SimpleForm } from "./components/SimpleForm";

import "bootstrap/dist/css/bootstrap.min.css";

const root = document.querySelector("#root");
if (root) {
	createRoot(root).render(
		<StrictMode>
			<SimpleForm />
		</StrictMode>
	);
}
