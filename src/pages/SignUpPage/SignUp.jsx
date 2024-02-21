import React, { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import googleLogo from "../../res/google-logo.png";

const SignUp = ({ setName }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        const username = user.displayName;
        setName(username);
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        const username = user.displayName;
        setName(username);
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      if (user) {
        const username = user.displayName;
        setName(username);
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="auth-container" id="main">
      <p>Sign In or Sign Up to continue</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="sign-in-btn" onClick={handleSignIn}>
        Sign In
      </button>
      <button className="sign-up-btn" onClick={handleSignUp}>
        Sign Up
      </button>
      <button className="google-sign-in-btn" onClick={handleGoogleSignIn}>
        <img src={googleLogo} alt="Google Logo" className="google-logo" />
        Sign In with Google
      </button>
    </div>
  );
};

export default SignUp;
