import React, { useState, useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import { UserContext } from "../../providers/UserProvider";

const CreateList = ({ onClose }) => {
  const { addList } = useContext(ListOverviewContext);
  const { loggedInUser } = useContext(UserContext);
  const [listName, setListName] = useState("");
  const [guestInput, setGuestInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const guestList = guestInput
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id !== "");
    if (guestList.includes(loggedInUser)) {
      setErrorMessage("As an owner, you can not be on the guest list.");
    } else {
      addList(listName, loggedInUser, guestList);
      setListName("");
      setGuestInput("");
      setErrorMessage("");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="list-name" className="formGroupName">
          Enter name for your list
        </label>
        <input
          type="text"
          id="list-name"
          name="listName"
          className="form-control"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="guest-input" className="formGroupID">
          Enter IDs of users you want to invite
        </label>
        <input
          type="text"
          id="guest-input"
          name="guestInput"
          className="form-control"
          placeholder="e.g., 123, 234, 345,..."
          value={guestInput}
          onChange={(e) => setGuestInput(e.target.value)}
        />
      </div>

      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <button type="submit" className="btn btn-primary">
        Create list
      </button>
    </form>
  );
};

export default CreateList;
