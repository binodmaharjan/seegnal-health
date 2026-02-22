import "./Sidebar.scss";
import { ConsiderIcon, HomeIcon, MoreIcon, PatientIcon } from "../../assets";
import Badge from "../custom/badge/Badge";

const menuItems = [
  { label: "Home", icon: HomeIcon },
  {
    label: "Patient factors",
    icon: PatientIcon,
    badge: "0",
    subLabel: "Influencing",
  },
  { label: "Diet to consider", icon: ConsiderIcon, badge: "0" },
  { label: "", icon: MoreIcon },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-item-link">
              <div className="sidebar-menu-item-icon">
                <img src={item.icon} alt={item.label} />
              </div>
              {!item.subLabel && (
                <div className="item-badge-wrapper">
                  <span className="sidebar-menu-item-label"> {item.label}</span>
                  {item.badge && <Badge count={item.badge} />}
                </div>
              )}
              {item.subLabel && (
                <>
                  {" "}
                  <span className="sidebar-menu-item-label"> {item.label}</span>
                  <div className="item-badge-wrapper">
                    <span>{item.subLabel}</span>
                    {item.badge && <Badge count={item.badge} />}
                  </div>
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
