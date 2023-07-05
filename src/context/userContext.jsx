import { createContext, useState } from "react";

const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const localUser = localStorage.getItem("userName");
  const [userName, setUserName] = useState(localUser);

  const values = {
    userName,
    setUserName,
  };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export default userContext;
