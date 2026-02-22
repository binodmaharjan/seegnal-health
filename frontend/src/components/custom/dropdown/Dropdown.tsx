import React from "react";
import "./Modal.scss";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Any component/content passed here
}

function Dropdown({ isOpen, onClose, children }: DropdownProps) {
  return (
    <div
      className={`dropdown-overlay ${isOpen ? "show" : ""}`}
      onClick={onClose}
    >
      <div className="dropdown" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
