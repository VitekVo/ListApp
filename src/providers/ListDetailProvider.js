import { createContext, useContext, useState } from 'react';

import listData from '../data/lists.json';

import { UserContext } from './UserProvider';

export const ListDetailContext = createContext();

function ListDetailProvider({ children }) {
  const { activeList } = useContext(UserContext);

  const activeListData = listData.find(list => list.id === activeList); 

  const [list, setList] = useState(activeListData);

  const changeName = (newName) => {
    setList(prevList => ({
      ...prevList,
      name: newName
    }))
  }

  const addItem = (itemName, quantity) => {
    setList(prevList => ({
      ...prevList,
      items: [...prevList.items,
        {"name": itemName, "qty": quantity, "checked": false}]
    }))
  }

  const addUser = (userID) => {
    setList(prevList => ({
      ...prevList,
      guests: [...prevList.guests, userID]
    }))
  }

  const removeUser = (userID) => {
    setList(prevList => ({
      ...prevList,
      guests: prevList.guests.filter(user => user !== userID)
    }));
  };

  const value = {
    list,
    changeName,
    addItem,
    addUser,
    removeUser
};

  return <ListDetailContext.Provider value={value}>{children}</ListDetailContext.Provider>;
}

export default ListDetailProvider;
