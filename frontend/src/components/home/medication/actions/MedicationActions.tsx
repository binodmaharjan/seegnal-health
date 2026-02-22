import { IoTrashOutline } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import "./MedicationActions.scss";

interface MedicationActionsProps {
  onDelete: () => void;
  onToggleVisibility?: () => void;
}

function MedicationActions({
  onDelete,
  onToggleVisibility,
}: MedicationActionsProps) {
  return (
    <div className="medication-actions">
      <button
        className="medication-actions__button"
        onClick={onToggleVisibility}
      >
        <BsEyeSlash size={25} style={{ transform: "scaleY(-1)" }} />
      </button>
      <button className="medication-actions__button" onClick={onDelete}>
        <IoTrashOutline size={25} />
      </button>
    </div>
  );
}

export default MedicationActions;
