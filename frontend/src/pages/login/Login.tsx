import { useState } from "react";
import "./Login.scss";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { KeycloakLogo } from "../../assets";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { login: loginReq, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const result = await loginReq({ email, password });
    if (result) {
      login(result.token, result.user.name);
      navigate("/", { replace: true });
    }
  };

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <img src={KeycloakLogo} alt="Keycloak" className="logo" />

        <div className="card">
          <h2 className="title">Sign in to your account</h2>
          <form onSubmit={onSubmit}>
            <>
              <div className="form-group email-field">
                <label className="label">Email</label>
                <input
                  type="text"
                  className={error && error.email ? "input error" : "input"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && error?.email && (
                  <span className="alert-icon">
                    <i className="fas fa-circle-exclamation fa-icon"></i>
                  </span>
                )}
                {error && error.email && (
                  <span className="error-msg">
                    {error.email || error.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Password</label>
                <div className="password-field">
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={
                        error && error.password
                          ? "password-input error"
                          : "password-input"
                      }
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && error?.password && (
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
                    {/* <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    ></span> */}
                  </div>
                </div>
              </div>

              <a href="#" className="forgot-link">
                Forgot Password?
              </a>

              {error && error.password && (
                <span className="error-msg">
                  {error.password || error.message}
                </span>
              )}

              <button className="btn-submit" type="submit">
                Sign In
              </button>
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
