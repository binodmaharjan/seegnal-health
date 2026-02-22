import { useState, useEffect } from "react";
import "./AddMedication.css";
import { useDrugs } from "../../../../hooks/useDrugs";
import AlertDialog from "../../../custom/alert/AlertDialog";
import AutoComplete from "../../../custom/autocomplete/AutoComplete";
import type { SelectedDrug } from "../../../../shared/types";
import { Constants } from "../../../../shared/utils/constants";

interface AddMedicationProps {
  isOpen: boolean;
  onAdd: (drugs: SelectedDrug[]) => void;
  onClose?: () => void;
}

interface DrugItemProps {
  drug: SelectedDrug;
  onRemove: (drug: SelectedDrug) => void;
}

function DrugItem({ drug, onRemove }: DrugItemProps) {
  return (
    <div key={drug.uniqueId} className="selected-drug">
      <span>
        {drug.name} {drug.strength}{" "}
      </span>

      <div>
        <button className="btn-link edit-btn">Add dosing parameters</button>
        <button className="btn-link remove-btn" onClick={() => onRemove(drug)}>
          Remove
        </button>
      </div>
    </div>
  );
}

function AddMedication({ isOpen, onAdd, onClose }: AddMedicationProps) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { drugs } = useDrugs();
  const [value, setValue] = useState("");
  const [selectedDrugs, setSelectedDrugs] = useState<SelectedDrug[]>([]);

  useEffect(() => {
    if (isOpen) {
      setValue("");
      setSelectedDrugs([]);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAlertOpen(false);
    setValue("");
  };

  const handleAdd = () => {
    if (selectedDrugs.length === 0) {
      setIsAlertOpen(true);
      setAlertMessage(Constants.ALERTS.NO_DRUGS_SELECTED);
      return;
    }

    onAdd(selectedDrugs);
    setSelectedDrugs([]);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div>
      <AlertDialog
        isOpen={isAlertOpen}
        title="Info"
        message={
          alertMessage ||
          "No drugs selected. Please select at least one drug to add."
        }
        onClose={handleClose}
        autoCloseDelay={3000}
      />
      <div className="add-medication-header">
        <h3 className="drug-search-title"> Search by Generic or Brand name</h3>

        <div className="add-medication-body">
          <AutoComplete
            items={drugs}
            value={value}
            onChange={setValue}
            onSelect={(drug) => {
              setValue("");
              const isAlreadySelected = selectedDrugs.some(
                (d) => d.id === drug.id,
              );
              if (isAlreadySelected) {
                setIsAlertOpen(true);
                setAlertMessage(Constants.ALERTS.DRUG_ALREADY_SELECTED);
                return;
              }

              setSelectedDrugs((prev) => [
                ...prev,
                { ...drug, uniqueId: crypto.randomUUID() },
              ]);
            }}
            filterFn={(drug, query) =>
              drug.name.toLowerCase().includes(query.toLowerCase())
            }
            renderItem={(drug) => (
              <div>
                <strong>{drug.name}</strong>
                {drug.strength && (
                  <span
                    style={{
                      marginLeft: "8px",
                      color: "#666",
                      fontSize: "12px",
                    }}
                  >
                    {drug.strength}
                  </span>
                )}
              </div>
            )}
            getItemKey={(drug) => drug.id}
            placeholder=""
            noResultsText="No result found"
            minChars={1}
          />
        </div>
        <div className="add-medication-footer">
          {
            <div className="selected-drugs-wrapper">
              {selectedDrugs && selectedDrugs.length > 0 && (
                <h5 className="selected-drugs-title">Added medication/s</h5>
              )}
              <ul>
                {selectedDrugs.map((drug) => (
                  <li>
                    <DrugItem
                      key={drug.uniqueId}
                      drug={drug}
                      onRemove={(d) =>
                        setSelectedDrugs((prev) =>
                          prev.filter((item) => item.uniqueId !== d.uniqueId),
                        )
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          }
          <button className="finish-btn" onClick={handleAdd}>
            Finish And update
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMedication;
