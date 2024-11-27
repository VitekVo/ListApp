import { createContext, useState } from "react";
import axios from "axios";

import listData from "../data/lists.json";

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const [lists, setLists] = useState(listData);

  const createList = async (name, host, guestList) => {
    try {
      const response = await axios.post("http://localhost:5000/api/lists", {
        name,
        host,
        guests: guestList,
        items: [], // Initialize with an empty items array
        archived: false, // Default value
      });

      // Handle the response (e.g., log or update state if necessary)
      console.log("List created successfully:", response.data);
    } catch (error) {
      console.error(
        "Error creating the list:",
        error.response?.data || error.message
      );
    }
  };

  const deleteList = (listId) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  const archiveList = (listId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, archived: !list.archived } : list
      )
    );
  };

  const value = {
    lists,
    createList,
    deleteList,
    archiveList,
  };

  return (
    <ListOverviewContext.Provider value={value}>
      {children}
    </ListOverviewContext.Provider>
  );
}

export default ListOverviewProvider;
