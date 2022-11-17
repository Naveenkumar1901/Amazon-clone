import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../assets/images/Amazon.jpg";
import { provider } from "../config/Firebase";
import { getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = JSON.parse(sessionStorage.getItem("currentuser"));

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        const userInfo = {
          name: user.user.displayName,
          email: user.user.email,
          photo: user.user.photoURL,
          id: user.user.uid,
        };
        sessionStorage.setItem("currentuser", JSON.stringify(userInfo));
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="signin-container">
      <img src={logo} alt="" className="signin-image" />
      <div className="signin-form">
        <h1 className="signin-text">Sign in</h1>
        <button className="signin-btn" onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
