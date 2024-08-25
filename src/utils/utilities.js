import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { GlobalDispatchContext } from "../context/GlobalContext";
import { useContext } from "react";

export const useUtils = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useContext(GlobalDispatchContext);

  function getAuth() {
    console.log("here");
  }

  async function handleLogin(data) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      if (user.emailVerified) {
        openModal("Logged in!");
        dispatch({ user });
        // navigate("/Dashboard");
      } else {
        openModal("Confirm Your Email!");
        dispatch({ user: null });
      }
    } catch (error) {
      openModal(error.message);
      return {
        type: "SET_USER",
        payload: null,
      };
    }
  }

  async function handleRegister(data) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      openModal("Verification email sent. Please check your inbox.");
      // navigate("/Auth/Login");
    } catch (error) {
      openModal(error.message);
      console.log(error.message);
    }
  }

  return {
    getAuth,
    handleLogin,
    handleRegister,
  };
};
