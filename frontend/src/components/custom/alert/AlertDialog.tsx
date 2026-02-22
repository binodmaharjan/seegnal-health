import { useEffect } from "react";
import Modal from "../modal/Modal";
import "./AlertDialog.scss";

interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

function AlertDialog({
  isOpen,
  message,
  onClose,
  autoClose = true,
  autoCloseDelay = 3000,
}: AlertDialogProps) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose]);

  return (
    <div>
      <Modal
        position="top"
        isOpen={isOpen}
        onClose={onClose}
        className="alert-dialog"
        showCloseButton={false}
      >
        <div className="alert-content">
          <p>{message}</p>
        </div>
      </Modal>
    </div>
  );
}

export default AlertDialog;
