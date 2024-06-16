import { client } from "./client";
import { stringParser } from "./stringParser";

export const fetchUser = () => {
  // Check for cookie set in UserProvider
  const cookieAuth = document?.cookie || null;
  const cookies = cookieAuth ? stringParser(document?.cookie) : {};
  const refreshToken = cookies["my-refresh-token"];
  const accessToken = cookies["my-access-token"];

  // If user has valid cookies, update user session
  if (refreshToken && accessToken) {
    client.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken,
    });
  } else {
    // make sure you handle this case!
    console.log("YOU ARE NOT LOGGED IN");
    throw new Error("User is not authenticated.");
  }

  // console.log("CLIENT>AUTH>USER", client.auth);

  // returns user information
  return client.auth.getUser();
};

export const signUpUser = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  console.log("RESPONSE FROM SIGNUP", response);
  return response.user;
};

export const signInUser = async (email, password) => {
  const response = await client.auth.signInWithPassword({ email, password });
  console.log("RESPONSE FROM SIGN IN", response);
  return response.user;
};
// export const signup = async (email, password) => {
//   const response = await client.auth.signUp({ email, password });
//   console.log("RESPONSE FROM SIGNUP", response);
//   return response.user;
// };

// export const signin = async (email, password) => {
//   const response = await client.auth.signIn({ email, password });
//   console.log("RESPONSE FROM SIGNIN", response);
//   return response.user;
// };

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

export const authListener = () => {
  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || event === "USER_DELETED") {
      // delete cookies on sign out
      const expires = new Date(0).toUTCString();
      document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
      document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;

      // REMOVE LOG AFTER DEV
      console.log("!!!!!COOKIES REMOVED FROM USER AUTH!!!!!");
      // REMOVE LOG AFTER DEV
    } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      const maxAge = 24 * 60 * 60; // 1 Day
      document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
      document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
    }
  });
};

export const fetchAdmin = () => {
  // Check for cookie set in UserProvider
  const cookieAuth = document?.cookie || null;
  const cookies = cookieAuth ? stringParser(document?.cookie) : {};
  const refreshToken = cookies["my-refresh-token"];
  const accessToken = cookies["my-access-token"];

  // If user has valid cookies, update user session
  if (refreshToken && accessToken) {
    client.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken,
    });
  } else {
    // make sure you handle this case!
    console.log("YOU ARE NOT LOGGED IN");
    throw new Error("Admin is not authenticated.");
  }

  // returns user information
  return client.auth.user();
};

export const logout = async () => {
  await client.auth.signOut();
};

export const getProducts = async () => {
  const response = await client
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("RESPONSE IN FETCH UTILS GETPRODUCTS", response);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await client
    .from("products")
    .select("*")
    .match({ id })
    .single();
  return response.data;
};

const productImageUpload = async (media) => {
  const response = await client.storage
    .from("product_images")
    .upload(`${media.name}`, media, {
      cacheControl: "3600",
      upsert: true,
    });
  return response;
};

export const insertProduct = async (data, media) => {
  const response = await client.from("products").insert(data);

  const imageUpload = await productImageUpload(media);

  console.log("RESPONSE FROM PRODUCT INSERT", response);
  console.log("IMAGE BUCKET RESPONSE FROM INSERT", imageUpload);
  return response.data;
};

const deleteProductImageFromBucket = async (image) => {
  console.log("IMAGE IN REMOVE IMAGE", image);
  const response = await client.storage.from("product_images").remove([image]);
  console.log("RESPONSE FROM IMAGE DELETE", response);
  return response;
};

export const deleteProductById = async (id, image) => {
  const response = await client.from("products").delete().match({ id });
  console.log("RESPONSE FROM DELETE PRODUCT", response);
  deleteProductImageFromBucket(image);
  return response;
};
