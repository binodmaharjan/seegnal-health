import React from "react";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "top" | "center" | "bottom";
  showCloseButton?: boolean;
  className?: string;
}

function Modal({
  isOpen,
  onClose,
  children,
  position = "center",
  showCloseButton = true,
  className = "",
}: ModalProps) {
  return (
    <div
      className={`modal-overlay modal-overlay--${position} ${
        isOpen ? "show" : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`modal ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button className="modal__close" onClick={onClose}>
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
