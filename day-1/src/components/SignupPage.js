import React from "react";
import Navbar from "./Navbar";

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form">
          <p> Create your account </p>

          <label>Your Name</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your First and last Name"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
