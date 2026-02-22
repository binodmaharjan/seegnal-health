import "./Logout.scss";
import { useAuth } from "../../../hooks/useAuth";
interface LogoutProps {
  username: string;
}

function Logout({ username }: LogoutProps) {
  const { logout } = useAuth();
  const handleLogout = () => {
    alert("Are you sure you want to logout?");
    logout();
  };
  return (
    <div className="logout">
      <span className="logout-username">{username}</span>
      <button className="logout-btn" onClick={handleLogout}>
        [Logout]
      </button>
    </div>
  );
}

export default Logout;
