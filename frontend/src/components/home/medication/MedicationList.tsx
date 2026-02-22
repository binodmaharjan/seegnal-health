import { CiCirclePlus } from "react-icons/ci";
import "./MedicationList.scss";
import MedicationActions from "./actions/MedicationActions";
import { useEffect, useRef, useState } from "react";

import { useInteraction } from "../../../hooks/useInteraction";

import CapsuleOverlay from "../../../test/CapsuleOverlay";
import NoAlerts from "../../custom/alert/no-alerts/NoAlert";
import Modal from "../../custom/modal/Modal";
import type {
  Interaction,
  Position,
  SelectedDrug,
} from "../../../shared/types";
import AddMedication from "./addmedication/AddMedication";
import Ribbon from "../../custom/ribbon/Ribbon";

interface MedicationHeaderProps {
  onOpenModal: () => void;
}
interface MedicationHeaderProps {
  onOpenModal: () => void;
}

function MedicationHeader({ onOpenModal }: MedicationHeaderProps) {
  return (
    <div className="medication-list-header">
      <h2 className="medication-list-title">Medication list</h2>
      <button className="medication-list-add-button" onClick={onOpenModal}>
        <CiCirclePlus size={38} strokeWidth={0.5} />
        <span className="medication-list-add-text">Add medication</span>
      </button>
    </div>
  );
}

function MedicationList() {
  const { analyze } = useInteraction();
  const itemRefs = useRef<Record<number, HTMLLIElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [medications, setMedications] = useState<SelectedDrug[]>([]);
  const [capsules, setCapsules] = useState<Position[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);

  const fetchInteractions = async (drugs: SelectedDrug[]) => {
    const drugIds = [...new Set(drugs.map((d) => d.id))].sort((a, b) => a - b);
    const result = await analyze(drugIds);
    if (result) {
      setInteractions(result);
    } else {
      setInteractions([]);
    }
  };

  const handleAddMedication = async (drugs: SelectedDrug[]) => {
    const newDrugs = [...medications, ...drugs];
    await fetchInteractions(newDrugs);
    setMedications((prev) => [...prev, ...drugs]);
  };

  useEffect(() => {
    const newCapsules: Position[] = [];

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    medications
      .map((drug) => drug.id)
      .forEach((id) => {
        const el = itemRefs.current[id];

        if (el) {
          const rect = el.getBoundingClientRect();

          newCapsules.push({
            id,
            top: rect.top - containerRect.top + rect.height / 2 + 150,
            left: -9,
          });
        }
      });

    setCapsules(newCapsules);
  }, [medications]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="medication-list">
        <MedicationHeader onOpenModal={handleOpenModal} />
        <div className="medication-list-content" ref={containerRef}>
          <ul className="medication-list-items">
            {medications.map((drug, index) => (
              <li
                key={drug.uniqueId}
                className="medication-list-item"
                data-id={drug.id}
                ref={(el) => {
                  itemRefs.current[drug.id] = el;
                }}
              >
                <span className="medication-list-index">{index + 1}.</span>
                <span className="medication-list-name">{drug.name}</span>
                <div className="medication-list-actions">
                  <MedicationActions
                    onDelete={async () => {
                      fetchInteractions(
                        medications.filter((d) => d.uniqueId !== drug.uniqueId),
                      );
                      setMedications((meds) =>
                        meds.filter((d) => d.uniqueId !== drug.uniqueId),
                      );
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>

          {interactions && (
            <div className="overlay-container">
              {interactions &&
                interactions.map((interaction) => (
                  <div key={interaction.id} className="overlay-content">
                    <>
                      <Ribbon
                        msg={interaction.alert}
                        color={interaction.color}
                      />

                      <CapsuleOverlay
                        capsules={capsules}
                        interaction={interaction}
                      />
                    </>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {interactions && interactions.length === 0 && <NoAlerts />}
      <Modal
        position="top"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className={"modal-add-medication"}
      >
        <AddMedication
          isOpen={showModal}
          onAdd={handleAddMedication}
          onClose={() => setShowModal(false)}
        />
      </Modal>
    </>
  );
}

export default MedicationList;
