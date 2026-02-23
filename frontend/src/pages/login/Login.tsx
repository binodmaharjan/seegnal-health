import { useState } from "react";
import "./Login.scss";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { KeycloakLogo } from "../../assets";
import FormInput from "@/components/custom/input/FormInput";
import FormPassword from "@/components/custom/input/FormPassword";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { login: loginReq, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <FormInput
                label="Email"
                type="email"
                value={email}
                className={"email-field"}
                onChange={(e) => setEmail(e.target.value)}
                error={error && error.email ? error.email : undefined}
              />

              <FormPassword
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error && error.password ? error.password : undefined}
              />

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
