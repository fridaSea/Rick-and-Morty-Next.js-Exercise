// we can put here as many functions as we need

"use server";

import { User } from "@/model/types/types";

async function loginUser(userCredentials: User) {
  console.log("secret in Server :>> ", process.env.SECRET);
  console.log("Login in database :>> ", userCredentials);
  //e.g Here it could go a query to our database UserModel.find({email:email})
  return {
    message: "user loggedin succesfully",
  };
}

async function registerUser(userCredentials: User) {
  console.log("Register in database :>> ", userCredentials);
}

export { loginUser, registerUser };
