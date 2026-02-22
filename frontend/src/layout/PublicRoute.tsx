import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PublicRouteProps {
  redirectPath?: string;
}

export function PublicRoute({ redirectPath = "/" }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();

  console.log("PublicRoute: isAuthenticated =", isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
