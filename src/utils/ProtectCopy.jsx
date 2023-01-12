import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RedirectDashboard = () => {
	const user = localStorage.getItem('user');
	const location = useLocation();

	return user === null ? (
		<Outlet />
	) : (
		<Navigate to="/dashboard" state={{ from: location }} replace={true} />
	);
};