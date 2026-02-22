import { useEffect } from "react";
import Modal from "../modal/Modal";

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
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#f9fafc",
            padding: "20px",
            color: "#de0000",
            fontWeight: "700",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <p>{message}</p>
        </div>
      </Modal>
    </div>
  );
}

export default AlertDialog;
