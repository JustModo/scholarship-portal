import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalDispatchContext } from "../../../context/GlobalContext";
import { handleLogin } from "../../../utils/utilities";

export default function Login() {
  const dispatch = useContext(GlobalDispatchContext);

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(payload));
  };

  return (
    <div className="flex justify-center items-center h-full font-sans flex-col">
      <form className="flex gap-2 w-72 flex-col" onSubmit={handleSubmit}>
        <label className="text-3xl font-bold text-accent">Login</label>
        <Input
          placeholder={"Email"}
          name={"email"}
          value={payload.email}
          onChange={handleChange}
          type="email"
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          value={payload.password}
          onChange={handleChange}
          type="password"
        />
        <button className="btn bg-accent text-white h-10">SUBMIT</button>
        <Link
          className="text-slate-400 text-sm self-center cursor-pointer underline"
          to={"/Auth/Register"}
        >
          Register
        </Link>
      </form>
    </div>
  );
}

function Input({ ...props }) {
  return (
    <label className="flex items-center h-10 ">
      <input
        type="text"
        className="flex-grow h-10 px-4 border border-gray-400"
        required
        {...props}
      />
    </label>
  );
}
