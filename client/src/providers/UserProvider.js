import { createContext, useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  const [activeList, setActiveList] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/user/list`);
      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }
      const data = await response.json();
      setUsers(data.userList.itemList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchLists = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/list/list?userId=${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch lists.");
      }
      const data = await response.json();
      setLists(data.listList.itemList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const userList = users.map((user) => ({
    id: user.id,
    name: user.name,
  }));

  const listList = lists.map((list) => ({
    id: list.id,
    name: list.name,
    host: list.host,
    guests: list.guests,
    items: list.items,
    archived: list.archived,
  }));

  const value = {
    userList,
    listList,
    loggedInUser,
    setLoggedInUser,
    activeList,
    setActiveList,
    fetchUsers,
    fetchLists,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
