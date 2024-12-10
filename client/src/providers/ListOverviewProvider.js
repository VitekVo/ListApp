import { createContext, useState, useContext } from "react";
import { UserContext } from "./UserProvider";

const API_URL = process.env.REACT_APP_API_URL;

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setActiveList, fetchLists } = useContext(UserContext);

  const createList = async (listName, loggedInUser, guestList) => {
    console.log("Creating list");
    try {
      const response = await fetch(`${API_URL}/list/create`, {
        method: "POST", // Set method to POST
        headers: {
          "Content-Type": "application/json", // Indicate JSON data
        },
        body: JSON.stringify({
          name: listName, // The name value
          host: loggedInUser, // The host value
          guests: guestList, // The guests array or value
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create the list.");
      }

      const data = await response.json();
      console.log("List created successfully:", data);

      // Optionally, you can handle the response further (e.g., set state)
      return data; // Return the result for further use
    } catch (err) {
      console.error("Error creating list:", err.message);
      setError(err.message); // Handle the error
    } finally {
      fetchLists(loggedInUser);
      setLoading(false); // Stop loading state if you’re using it
    }
  };

  const deleteList = async (loggedInUser, listToDelete) => {
    console.log("Deleting list:", listToDelete);
    try {
      const response = await fetch(`${API_URL}/list/delete/`, {
        method: "DELETE", // Set method to DELETE
        headers: {
          "Content-Type": "application/json", // Optional, usually not required for DELETE
        },
        body: JSON.stringify({
          userId: loggedInUser, // The name value
          listId: listToDelete, // The host value
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the list.");
      }

      const data = await response.json();
      console.log("List deleted successfully:", data);

      // Optionally, return the data for further use
      return data;
    } catch (err) {
      console.error("Error deleting list:", err.message);
      setError(err.message); // Handle the error state
    } finally {
      setActiveList("");
      fetchLists(loggedInUser);
      setLoading(false); // Stop the loading state
    }
  };

  const updateList = async (
    listId,
    loggedInUser,
    name,
    guestList,
    state,
    list
  ) => {
    console.log("Updating list");

    // Fallback values: Use existing list data if new values aren't provided
    const updatedName = name || list.name;
    const updatedGuestList = guestList || list.guests;
    const updatedState = state !== undefined ? state : list.archived;

    // Dynamically build the body with only provided fields
    const listData = {};
    if (name) listData.name = updatedName;
    if (guestList) listData.guests = updatedGuestList;
    if (state !== undefined) listData.archived = updatedState;

    const requestBody = {
      userId: loggedInUser,
      listId,
      listData, // Only include the fields that are dynamically added
    };

    try {
      const response = await fetch(`${API_URL}/list/update/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to update the list.");
      }

      const data = await response.json();
      console.log("List updated successfully:", data);

      return data;
    } catch (err) {
      console.error("Error updating list:", err.message);
      setError(err.message);
    } finally {
      fetchLists(loggedInUser);
      setLoading(false);
    }
  };

  const value = {
    createList,
    deleteList,
    updateList,
  };

  return (
    <ListOverviewContext.Provider value={value}>
      {children}
    </ListOverviewContext.Provider>
  );
}

export default ListOverviewProvider;
