import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";

const Login = ({ setCollectUser }) => {
  const navigate = useNavigate();
  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        fireAuthToken();
        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userPhoto", user.photoURL);
        sessionStorage.setItem("displayName", user.displayName);
        navigate("/appointment");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  };

  const fireAuthToken = () => {
    getAuth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("authToken", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div>
      <button className="btn" onClick={handleLogIn}>
        log in with google
      </button>
    </div>
  );
};

export default Login;
