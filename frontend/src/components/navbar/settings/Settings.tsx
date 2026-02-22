import { AboutIcon, FileIcon, HelpIcon, MenuIcon } from "../../../assets";
import "./Settings.scss";

type Settings = {
  icon: string;
  label: string;
};

const settingsOptions: Settings[] = [
  { icon: HelpIcon, label: "Help" },
  { icon: FileIcon, label: "Terms & Conditions" },
  { icon: AboutIcon, label: "About" },
];

function Settings() {
  return (
    <div className="settings">
      <div className="settings-icon">
        <img src={MenuIcon} alt="Settings Icon" className="settings-icon-img" />
      </div>
      <div className="settings-dropdown">
        <ul className="settings-list">
          {settingsOptions.map((option) => (
            <li key={option.label} className="settings-item">
              <img
                src={option.icon}
                alt={`${option.label} Icon`}
                className="settings-item-icon"
              />
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
