import { createContext, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [activeList, setActiveList] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    console.log("Fetching users");
    try {
      const response = await fetch(`${API_URL}/users/list`);
      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const userList = users.map((user) => ({
    id: user._id,
    name: user.name,
  }));

  const value = {
    userList,
    loggedInUser,
    activeList,
    setActiveList,
    setLoggedInUser,
    fetchUsers,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
