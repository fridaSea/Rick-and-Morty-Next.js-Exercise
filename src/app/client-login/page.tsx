"use client";

import { User } from "@/model/types/types";
import React, { useState } from "react";
import { loginUser } from "../actions/actions";

function ClientLogin() {
  const [loginCredentials, setLoginCredentials] = useState<User | null>(null);
  console.log("process.env.SECRET :>> ", process.env.SECRET);

  const handleSubmitLogin = async () => {
    //console.log("secret in Client :>> ", process.env.SECRET);
    const response = await loginUser(loginCredentials!);
    console.log("response :>> ", response.message);
  };
  return (
    <div>
      <h2>
        This is a <strong>Client Component</strong> that calls a function that
        runs on the server (check what and where you see the .env variable
        SECRET).
      </h2>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="type your email"
        onChange={(e) => {
          setLoginCredentials({ ...loginCredentials!, email: e.target.value });
        }}
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="type your password"
        onChange={(e) => {
          setLoginCredentials({
            ...loginCredentials!,
            password: e.target.value,
          });
        }}
      />
      <button onClick={handleSubmitLogin}>Login</button>
    </div>
  );
}

export default ClientLogin;
