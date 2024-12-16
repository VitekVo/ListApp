import { createContext, useContext, useEffect, useState } from "react";

import { UserContext } from "./UserProvider";

import { createList, fetchLists, updateList, deleteList } from "./FetchHelper";

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const { loggedInUser, fetchUsers } = useContext(UserContext);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addList = async (listName, loggedInUser, guestList) => {
    const newList = { name: listName, host: loggedInUser, guests: guestList };
    try {
      await createList(newList);
      loadLists(loggedInUser);
    } catch (err) {
      console.error("Error creating list:", err);
    }
  };

  const loadLists = async (userId) => {
    console.log("Loading lists");
    setLoading(true);
    setError("");
    try {
      const data = await fetchLists(userId);
      setLists(data);
    } catch (err) {
      setError("Failed to load lists");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeList = async (listId) => {
    try {
      await deleteList(listId);
      loadLists(loggedInUser);
    } catch (err) {
      console.error("Error deleting list:", err);
    }
  };

  const archiveList = async (listId, state) => {
    const updateData = { archived: state };
    try {
      await updateList(listId, updateData);
      loadLists(loggedInUser);
    } catch (err) {
      console.error("Error updating list:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      loadLists(loggedInUser);
    }
  }, [loggedInUser]);

  const value = {
    lists,
    addList,
    loadLists,
    removeList,
    archiveList,
  };

  return (
    <ListOverviewContext.Provider value={value}>
      {children}
    </ListOverviewContext.Provider>
  );
}

export default ListOverviewProvider;
