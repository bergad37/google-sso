import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
  };

  const handleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Google Demo App</p>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
