import { useCallback, useEffect, useState } from "react";

interface OverlayCapsuleProps {
  targetId: string;
}

interface Position {
  top: number;
  left: number;
}

function OverlayCapsule({ targetId }: OverlayCapsuleProps) {
  const [position, setPosition] = useState<Position | null>(null);

  const updatePosition = useCallback(() => {
    const el = document.querySelector(
      `[data-id="${targetId}"]`,
    ) as HTMLElement | null;

    const container = document.querySelector(
      ".home-content",
    ) as HTMLElement | null;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setPosition({
      top: elRect.top - containerRect.top + elRect.height / 2,
      left: elRect.left - containerRect.left + elRect.width / 2,
    });
  }, [targetId]);

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);

  if (!position) return null;

  return (
    <div
      className="overlay-capsule"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      ⚠ Moderate
    </div>
  );
}

export default OverlayCapsule;
