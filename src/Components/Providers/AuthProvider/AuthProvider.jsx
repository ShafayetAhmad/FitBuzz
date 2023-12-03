/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const googleAuthProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const registerUser = async (email, password, fullName) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result.user) {
        await updateProfile(result.user, {
          displayName: fullName,
        });
      }
      Swal.fire("Registration successful");
      return result;
    } catch (error) {
      console.log(error.message);
      setRegisterError(error.message);
      Swal.fire(registerError);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (fullName, imglink) => {
    const result = await updateProfile(user, {
      displayName: fullName,
      photoURL: imglink,
    }).then((result) => {
      console.log(result);
      Swal.fire("Profile Updated");
    });
    return result;
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      Swal.fire("Google Login Succesfull");
      return result;
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = (email, password) => {
    setLoading(true);
    try {
      const result = signInWithEmailAndPassword(auth, email, password);
      Swal.fire("Login Succesfull");
      return result;
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    Swal.fire("Logout successful");
    setLoading(false);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("user on auth changed: ", currentUser);
      setUser(currentUser);
      setLoading(false);
      {
        /*if (currentUser) {
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
      }}*/
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
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
