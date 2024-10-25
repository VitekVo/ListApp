import { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [activeList, setActiveList] = useState("l1");
  const [loggedInUser, setLoggedInUser] = useState("u1");
  const value = {
    userList: [
      { id: "u1", name: "Adam" },
      { id: "u2", name: "Betty" },
      { id: "u3", name: "Courtney" },
      { id: "u4", name: "David" }
    ],
    loggedInUser,
    setLoggedInUser,
    activeList,
    setActiveList
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
