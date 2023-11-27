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
import Swal from "sweetalert2";
import { auth } from "../../../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const googleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, GoogleAuthProvider);
      Swal.fire("Logged In");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      Swal.fire("New User Registered!");
      setLoading(false);
    }
  };
  const logIn = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      Swal.fire("User Logged In!");
    }
    setLoading(true);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        Swal.fire("User Logged Out!");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          createUser,
          googleSignIn,
          logIn,
          logOut,
          loading,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
