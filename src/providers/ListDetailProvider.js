import { createContext, useContext, useState } from 'react';

import listData from '../data/lists.json';

import { UserContext } from './UserProvider';

export const ListDetailContext = createContext();

<<<<<<< HEAD
function ListDetailProvider({  }) {


  return 
  // <ListDetailContext.Provider value={data, handlerMap :{}}>
  //   {children}
  // </ListDetailContext.Provider>;
  
=======
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
>>>>>>> bf5e7633099a368d8d2c39983391a5faf4beff04
}

export default ListDetailProvider;
