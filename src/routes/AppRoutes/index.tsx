import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { RegistrationForm } from "@/components/Posts/RegistrationForm";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RegistrationForm />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
