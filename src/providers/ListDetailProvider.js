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

  const value = {
    list,
    changeName
};

  return <ListDetailContext.Provider value={value}>{children}</ListDetailContext.Provider>;
}

export default ListDetailProvider;
