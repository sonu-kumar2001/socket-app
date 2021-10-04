import React, { useState } from "react";
import LoginForm from "./Form/LoginForm";
import authApi from "../axios/auth";
import { setAuthHeaders } from "../axios/axios";

export default function Login() {
  const [managerId, setManagerId] = useState(0);
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authApi.login({ managerId, password });
      if (response.data) {
        localStorage.setItem("managerId", managerId);
      }
      setAuthHeaders();
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LoginForm
        setManagerId={setManagerId}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
