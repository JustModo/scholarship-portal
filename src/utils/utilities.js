import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useModal } from "../context/ModalContext";
import { useGlobalDispatch, useGlobalState } from "../context/GlobalContext";
import { ref as databaseRef, set } from "firebase/database";

export const useUtils = () => {
  const { openModal } = useModal();
  const dispatch = useGlobalDispatch();

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
      set(databaseRef(db, "users/" + user.uid), {
        Firstname: data.firstname,
        lastname: data.lastname,
        phno: data.phnumber,
        email: data.email,
        fileupload: false,
      });
    } catch (error) {
      openModal(error.message);
      console.log(error.message);
    }
  }

  return {
    handleLogin,
    handleRegister,
  };
};
