import { createContext, useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [activeList, setActiveList] = useState("");
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const htmlElement = document.getElementsByTagName("html");
    htmlElement[0].setAttribute("data-theme", theme);
    htmlElement[0].setAttribute("data-bs-theme", theme);
  }, [theme]);

  const fetchUsers = async () => {
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
    theme,
    loading,
    error,
    setActiveList,
    setLoggedInUser,
    fetchUsers,
    setTheme,
    setLoading,
    setError,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
