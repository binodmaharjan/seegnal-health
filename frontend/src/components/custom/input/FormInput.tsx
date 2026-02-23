// components/FormInput.tsx
interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  className = "",
}: FormInputProps) {
  return (
    <div className={`form-group ${className}`}>
      <label className="label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={error ? "input error" : "input"}
      />

      {error && (
        <>
          <span className="alert-icon">
            <i className="fas fa-circle-exclamation fa-icon"></i>
          </span>
          <span className="error-msg">{error}</span>
        </>
      )}
    </div>
  );
}
