import { createContext, useState, useEffect } from "react";
import { authListener, fetchUser } from "../services/fetch-utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // CALL SUPABASE AUTH EVENT LISTENER
  authListener();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getAndSetUser = () => {
      try {
        fetchUser().then((res) => setUser(res?.data?.user));
      } catch (error) {
        console.error("No User signed in");
        setUser(null);
      }
    };
    getAndSetUser();
  }, []);

  useEffect(() => {
    console.log("UPDATED USER IN USER CONTEXT", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
