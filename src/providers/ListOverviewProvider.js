import { createContext, useState } from "react";

import listData from "../data/lists.json";

// import { UserContext } from './UserProvider';

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const [lists, setLists] = useState(listData);

  const createList = (listName, guestList) => {
    setLists((prevList) => ({
      ...prevList,
    }));
  };

  const value = {
    lists,
    createList,
  };

  return (
    <ListOverviewContext.Provider value={value}>
      {children}
    </ListOverviewContext.Provider>
  );
}

export default ListOverviewProvider;
