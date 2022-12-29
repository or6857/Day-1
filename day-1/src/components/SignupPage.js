import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../FirebaseCongifs/FirebaseConfig";

const SignupPage = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        const initialKartValue = 0;
        console.log(user);
        addDoc(collection(db, "users"), {
          username: Username,
          Password: password,
          email: email,
          phonenumber: phonenumber,
          kart: initialKartValue,
          address: address,
          uid: user.uid,
        })
          .then(() => {
            setSuccessMsg("User created successfully");
            setUsername("");
            errorMsg("");
            setEmail("");
            setPassword("");
            setPhonenumber("");
            setTimeout(() => {
              successMsg("");
              navigate("/login");
            }, 4000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p> Create your account </p>
          <label>Your Name</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your First and last Name"
          />
          <label>Phone Number</label>
          <input
            onChange={(e) => setPhonenumber(e.target.value)}
            type="tel"
            placeholder="Mobile Number"
          />
          <label>E-Mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <label>Home Address</label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
          <button className="signup-button" type="submit">
            Sign up
          </button>
          <div className="signup-footer">
            <span>Already a User?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
