import { createContext, useContext, useState, useEffect, React } from "react";
import axios from "axios";
import { UserContext } from "./UserProvider";
import { useParams } from "react-router-dom";

import {
  getList,
  updateList,
  manageGuests,
  createItem,
  updateItem,
  deleteItem,
} from "./FetchHelper";

export const ListDetailContext = createContext();

function ListDetailProvider({ children }) {
  const { activeList, setActiveList, fetchUsers } = useContext(UserContext);
  const [theList, setTheList] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (!activeList && id) {
      setActiveList(id);
    }
  }, [id, activeList, setActiveList]);

  useEffect(() => {
    fetchList();
  }, [activeList]);

  const fetchList = async () => {
    if (activeList) {
      try {
        const fetchedList = await getList(activeList);
        setTheList(fetchedList);
      } catch (error) {
        console.error("Error fetching the list:", error);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeName = async (name) => {
    const listId = activeList;
    const updateData = { name };
    try {
      await updateList(listId, updateData);
      const fetchedList = await getList(activeList);
      setTheList(fetchedList);
    } catch (err) {
      console.error("Error updating list:", err);
    }
  };

  const manageUsers = async (userId, action) => {
    const listId = activeList;
    const updateData = { userId, action };
    try {
      await manageGuests(listId, updateData);
      const fetchedList = await getList(activeList);
      setTheList(fetchedList);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          setError(
            error.response.data.message ||
              "Bad Request: Please check your input."
          );
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      }
    }
  };

  const addItem = async (itemName, qty) => {
    const listId = activeList;
    const updateData = { name: itemName, quantity: qty };
    try {
      await createItem(listId, updateData);
      const fetchedList = await getList(activeList);
      setTheList(fetchedList);
    } catch (err) {
      console.error("Error updating list:", err);
    }
  };

  const changeItem = async (itemId, state) => {
    const listId = activeList;
    const updateData = { itemId: itemId, checked: state };
    try {
      await updateItem(listId, updateData);
      const fetchedList = await getList(activeList);
      setTheList(fetchedList);
    } catch (err) {
      console.error("Error updating list:", err);
    }
  };

  const removeItem = async (itemId) => {
    const listId = activeList;
    try {
      await deleteItem(listId, itemId);
      const fetchedList = await getList(activeList);
      setTheList(fetchedList);
    } catch (err) {
      console.error("Error updating list:", err);
    }
  };

  if (!id || !theList) {
    return <p>This URL does not exist.</p>;
  }

  const value = {
    theList,
    error,
    setError,
    fetchList,
    changeName,
    addItem,
    manageUsers,
    changeItem,
    removeItem,
  };

  return (
    <ListDetailContext.Provider value={value}>
      {children}
    </ListDetailContext.Provider>
  );
}

export default ListDetailProvider;
