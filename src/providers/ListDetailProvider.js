import { createContext } from 'react';

export const ListDetailContext = createContext();

function ListDetailProvider({ children }) {
  const value = {};
  return <ListDetailContext.Provider value={value}>{children}</ListDetailContext.Provider>;
}

export default ListDetailProvider;
