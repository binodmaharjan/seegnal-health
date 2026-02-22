import Badge from "../components/custom/badge/Badge";
import Ribbon from "../components/custom/ribbon/Ribbon";
// import Checkbox from "../components/custom/checkbox/CheckBox";

export default function MedicationPage() {
  return (
    <>
      <h1>Medication Page</h1>
      <Badge count="0" />
      <div style={{ width: "130px" }}>
        <Ribbon msg="Severe Interactions" color="#ff0000" />
      </div>
      {/* <Checkbox /> */}
    </>
  );
}
