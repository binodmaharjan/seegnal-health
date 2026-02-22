import { useState, useRef, useEffect } from "react";
import { NotificationIcon } from "../../../assets";
import "./Notification.scss";

interface NotificationProps {
  count?: number;
}

function Notification({ count = 0 }: NotificationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notification" ref={containerRef}>
      <div className="notification-container" onClick={toggleOverlay}>
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="notification-icon"
        />
        {count >= 0 && (
          <div className="notification-badge">
            <span className="notification-badge-count">
              {count > 99 ? "99+" : count}
            </span>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="notification-overlay">
          <div className="notification-header">
            <h3 className="notification-title">Notifications</h3>
          </div>

          <div className="notification-list">
            <div className="notification-empty">
              <p>No notifications</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
