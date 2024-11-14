import { createContext, useState } from "react";

import listData from "../data/lists.json";

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const [lists, setLists] = useState(listData);

  const createList = (name, host, guestList) => {
    setLists((prevLists) => [
      ...prevLists,
      {
        id: Math.random().toString(),
        host: host,
        name: name,
        items: [],
        guests: guestList,
        archived: false,
      },
    ]);
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
