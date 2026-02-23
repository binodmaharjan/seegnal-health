import { useState } from "react";

// components/FormPassword.tsx
interface FormPasswordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function FormPassword({ onChange, error }: FormPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group">
      <label className="label">Password</label>
      <div className="password-field">
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className={error ? "password-input error" : "password-input"}
            onChange={onChange}
          />

          {error && (
            <span className="alert-icon-password">
              <i className="fas fa-circle-exclamation fa-icon"></i>
            </span>
          )}
        </div>
        <div
          className="eye-icon-wrapper"
          tabIndex={0}
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <i className="fas fa-eye-slash fa-icon"></i>
          ) : (
            <i className="fas fa-eye fa-icon"></i>
          )}
        </div>
      </div>
    </div>
  );
}
