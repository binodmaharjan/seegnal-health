import { useState } from "react";
import "./Navbar.scss";
import logoSeegnal from "./../../assets/logo-seegnal.svg";
import Switch from "../custom/switch/Switch";
import BtnWithImg from "../custom/btnwithimg/BtnWithImg";
import Logout from "./logout/Logout";
import Notification from "./notifications/Notification";
import Settings from "./settings/Settings";
import { feedBackIcon } from "../../assets";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const [expertView, setExpertView] = useState(false);
  const { name } = useAuth();

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="brand-logo">
          <img src={logoSeegnal} alt="Seegnal Logo" className="navbar-logo" />
        </div>

        <div className="expert-view-wrapper">
          <div className="expert-view">
            <span className="expert-text">Expert view</span>
            <Switch
              checked={expertView}
              onChange={(value) => setExpertView(value)}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <BtnWithImg label="Feedback" icon={feedBackIcon} />
        <Logout username={name || "User"} />
        <Settings />
        <Notification />
      </div>
    </nav>
  );
}
