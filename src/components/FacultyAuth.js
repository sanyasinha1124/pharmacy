import React, { useState } from "react";
import "./FacultyAuth.css";

const FacultyAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpLogin, setIsOtpLogin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    department: "",
    facultyId: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (isOtpLogin) {
        alert("OTP Verified Successfully! (dummy)");
      } else {
        alert("Login Successful! (dummy)");
      }
    } else {
      alert("Registered Successfully! (dummy)");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fadeIn">
        <h2 className="auth-title">
          {isLogin ? "Faculty Login" : "Faculty Registration"}
        </h2>
        <p className="auth-info">
          {isLogin
            ? "Login to access your faculty dashboard."
            : "Register to create your faculty profile."}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="input-group">
                <label>Faculty Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Department</label>
                <input
                  id="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Faculty ID</label>
                <input
                  id="facultyId"
                  value={form.facultyId}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {isLogin && !isOtpLogin && (
            <div className="input-group">
              <label>Password</label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {isLogin && isOtpLogin && (
            <>
              <div className="input-group">
                <label>Enter OTP</label>
                <input
                  id="otp"
                  value={form.otp}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="button"
                className="secondary-button"
                onClick={() => alert("OTP Sent! (dummy)")}
              >
                Send OTP
              </button>
            </>
          )}

          <button className="auth-button">
            {isLogin
              ? isOtpLogin
                ? "Verify OTP"
                : "Login"
              : "Register"}
          </button>
        </form>

        <div className="toggle-section">
          {isLogin && (
            <p>
              {isOtpLogin ? "Prefer password login?" : "Login with OTP instead?"}
              <button
                className="toggle-button"
                onClick={() => setIsOtpLogin(!isOtpLogin)}
              >
                {isOtpLogin ? "Use Password" : "Use OTP"}
              </button>
            </p>
          )}

          <p>
            {isLogin ? "Don't have an account?" : "Already registered?"}
            <button
              className="toggle-button"
              onClick={() => {
                setIsLogin(!isLogin);
                setIsOtpLogin(false);
              }}
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAuth;
