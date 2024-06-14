import { client } from "./client";

export const signUpUser = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  console.log("RESPONSE FROM SIGNUP", response);
  return response.user;
};

export const signInUser = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  return response.user;
};

export const createProfile = async (
  firstName,
  lastName,
  email,
  phone,
  address
) => {
  const response = await client.from("profiles").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
    },
  ]);
  console.log("RESPONSE FROM CREATE PROFILE", response);
  return response;
};
