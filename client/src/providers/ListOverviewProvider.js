import { createContext, useState, useContext } from "react";
import { UserContext } from "./UserProvider";

export const ListOverviewContext = createContext();

function ListOverviewProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setActiveList, fetchLists } = useContext(UserContext);

  const createList = async (listName, loggedInUser, guestList) => {
    console.log("Creating list");
    try {
      const response = await fetch(
        "http://localhost:8080/uu-listapp-maing01/22222222222222222222222222222222/list/create",
        {
          method: "POST", // Set method to POST
          headers: {
            "Content-Type": "application/json", // Indicate JSON data
          },
          body: JSON.stringify({
            name: listName, // The name value
            host: loggedInUser, // The host value
            guests: guestList, // The guests array or value
          }),
        }
      );

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
      fetchLists();
      setLoading(false); // Stop loading state if you’re using it
    }
  };

  const deleteList = async (loggedInUser, listToDelete) => {
    console.log("Deleting list:", listToDelete);
    try {
      const response = await fetch(
        `http://localhost:8080/uu-listapp-maing01/22222222222222222222222222222222/list/delete/`,
        {
          method: "DELETE", // Set method to DELETE
          headers: {
            "Content-Type": "application/json", // Optional, usually not required for DELETE
          },
          body: JSON.stringify({
            userId: loggedInUser, // The name value
            listId: listToDelete, // The host value
          }),
        }
      );

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
      fetchLists();
      setLoading(false); // Stop the loading state
    }
  };

  const updateList = async ({
    listId,
    loggedInUser,
    listName,
    guestList,
    state,
  }) => {
    console.log("Updating list");

    // Dynamically build the body with only provided fields
    const requestBody = { userId: loggedInUser, listId };
    if (listName) requestBody.name = listName;
    if (guestList) requestBody.guests = guestList;
    if (state !== undefined) requestBody.archived = state;

    try {
      const response = await fetch(
        "http://localhost:8080/uu-listapp-maing01/22222222222222222222222222222222/list/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

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
      fetchLists(); // Refresh the lists
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
