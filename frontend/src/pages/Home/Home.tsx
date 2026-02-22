import DrugsRelatedProblem from "../../components/home/drugs-related-problems/DrugsRelatedProblem";

import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useRef } from "react";
import MedicationList from "../../components/home/medication/MedicationList";

function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="home">
      <div className="home-sidebar">
        <Sidebar />
      </div>
      <div className="home-content" ref={containerRef}>
        <DrugsRelatedProblem />
        <MedicationList />
      </div>
    </div>
  );
}

export default Home;
