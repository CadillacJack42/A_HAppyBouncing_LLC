import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("User context must come from UserProvider");
  }
  return context;
};
