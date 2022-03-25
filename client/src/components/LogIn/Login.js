import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase.config';
export const LoginContext = createContext();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState({
        name: '', 
        email: ''
      });
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
            setLoggedInUser({name: user.displayName, email: user.email})
            navigate('/appointment')
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
            console.log(errorMessage)
            // ...
          });
      };
      console.log(loggedInUser)
    return (
        <LoginContext.Provider value ={loggedInUser}>
            <button className='btn' onClick={handleLogIn}> log in with google</button>
        </LoginContext.Provider>
    );
};

export default Login;