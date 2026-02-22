import "./Ribbon.scss";
import { PiInfo } from "react-icons/pi";
interface RibbonProps {
  msg: string;
  color: string;
}

function Ribbon({ msg, color }: RibbonProps) {
  return (
    <div className="ribbon">
      <div className="ribbon-header" style={{ backgroundColor: color }}></div>
      <div className="ribbon-body">
        <h2 className="ribbon-title">{msg}</h2>
        {msg && (
          <span className="ribbon-info">
            <PiInfo size={20} color="#959494" />
          </span>
        )}
      </div>
    </div>
  );
}

export default Ribbon;
