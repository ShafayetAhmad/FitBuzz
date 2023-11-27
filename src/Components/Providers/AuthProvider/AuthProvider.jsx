/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const googleAuthProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const registerUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
      setRegisterError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      return await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = (email, password) => {
    setLoading(true);
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("user on auth changed: ", currentUser);
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("https://gig-rapid-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("https://gig-rapid-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unSubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        user,
        logout,
        userLogin,
        googleLogin,
        loading,
        registerError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
