import "./BtnWithImg.scss";

interface BtnWithImgProps {
  label: string;
  icon: string;
}

function BtnWithImg({ label, icon }: BtnWithImgProps) {
  return (
    <button className="btn-with-img">
      {label}
      <img src={icon} alt={`${label} Icon`} className="btn-with-img__icon" />
    </button>
  );
}

export default BtnWithImg;
