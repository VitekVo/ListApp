import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
export const ListDetailContext = createContext();

function ListDetailProvider({ children }) {
  const { activeList, setActiveList, listList } = useContext(UserContext);
  const [list, setList] = useState("");
  // const { id } = useParams();

  // useEffect(() => {
  //   if (!activeList && id) {
  //     setActiveList(id);
  //   }
  // }, [id, activeList, setActiveList]);

  useEffect(() => {
    if (activeList) {
      const foundList = listList.find((list) => list.id === activeList);
      setList(foundList || null);
    }
  }, [activeList, setActiveList, listList]);

  // if (!listData || !list) {
  //   return <p>This URL does not exist.</p>;
  // }

  const changeName = (newName) => {
    setList((prevList) => ({
      ...prevList,
      name: newName,
    }));
  };

  const addItem = (itemName, quantity) => {
    setList((prevList) => ({
      ...prevList,
      items: [
        ...prevList.items,
        {
          id: Math.random().toString(),
          name: itemName,
          qty: quantity,
          checked: false,
        },
      ],
    }));
  };

  const addUser = (userID) => {
    setList((prevList) => ({
      ...prevList,
      guests: [...prevList.guests, userID],
    }));
  };

  const removeUser = (userID) => {
    setList((prevList) => ({
      ...prevList,
      guests: prevList.guests.filter((user) => user !== userID),
    }));
  };

  const changeItem = (itemID) => {
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.map((item) =>
        item.id === itemID ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const deleteItem = (itemID) => {
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.filter((item) => item.id !== itemID),
    }));
  };

  const value = {
    list,
    changeName,
    addItem,
    addUser,
    removeUser,
    changeItem,
    deleteItem,
  };

  return (
    <ListDetailContext.Provider value={value}>
      {children}
    </ListDetailContext.Provider>
  );
}

export default ListDetailProvider;
