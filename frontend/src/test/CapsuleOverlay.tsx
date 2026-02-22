import "./CapsuleOverlay.scss";

import type { Position, Interaction } from "../shared/types";

interface CapsuleOverlayProps {
  capsules: Position[];
  interaction: Interaction;
}

function CapsuleOverlay({ capsules, interaction }: CapsuleOverlayProps) {
  return (
    <div className="overlay">
      {capsules.map((capsule) => (
        <div
          key={capsule.id}
          className="capsule"
          style={{
            position: "absolute",
            top: capsule.top,
            left: capsule.left,
            transform: "translateY(-50%)",
            display: interaction.combination.includes(capsule.id)
              ? "inline-block"
              : "none",
          }}
        ></div>
      ))}
    </div>
  );
}

export default CapsuleOverlay;
