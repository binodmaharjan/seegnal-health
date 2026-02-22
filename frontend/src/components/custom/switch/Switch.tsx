import "./Switch.scss";

interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function Switch({ checked, onChange }: SwitchProps) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="switch-slider">
        <span className="switch-text switch-text-off">Off</span>
        <span className="switch-text switch-text-on">On</span>
      </span>
    </label>
  );
}

export default Switch;
