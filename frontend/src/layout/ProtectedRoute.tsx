import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export function ProtectedRoute({
  redirectPath = "/login",
}: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  console.log("ProtectedRoute: isAuthenticated =", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
