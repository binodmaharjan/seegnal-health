import "./Badge.scss";

interface BadgeProps {
  count?: string;
}
function Badge({ count = "0" }: BadgeProps) {
  return (
    <div className="badge">
      <span className="badge-text">{count}</span>
    </div>
  );
}

export default Badge;
