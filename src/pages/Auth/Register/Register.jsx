import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUtils } from "../../../utils/utilities";

export default function Register() {
  const { handleRegister } = useUtils();

  const [payload, setPayload] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phnumber: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleRegister(payload);
  };

  return (
    <div className="flex justify-center items-center h-full font-sans flex-col">
      <form className="flex gap-2 w-72 flex-col" onSubmit={handleSubmit}>
        <label className="text-3xl font-bold text-accent">Register</label>
        {/* <label className="font-semibold text-gray-500 self-center">
          Details
        </label> */}
        <Input
          placeholder={"First Name"}
          name={"firstname"}
          value={payload.firstname}
          onChange={handleChange}
        />
        <Input
          placeholder={"Last Name"}
          name={"lastname"}
          value={payload.lastname}
          onChange={handleChange}
        />
        <Input
          placeholder={"Ph. Number"}
          name={"phnumber"}
          value={payload.phnumber}
          onChange={handleChange}
          type="tel"
        />
        {/* <label className="font-semibold text-gray-500 self-center">
          Credentials
        </label> */}
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
        <button className="btn bg-accent text-white h-10" type="submit">
          SUBMIT
        </button>
        <Link
          className="text-slate-400 text-sm self-center cursor-pointer underline"
          to={"/Auth/Login"}
        >
          Login
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
