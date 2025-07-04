import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="form-input"
            />
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="#" className="signup-link">Sign up?</a>
        </p>
      </div>
    </div>
  );
}