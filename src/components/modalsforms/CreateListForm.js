import React, { useState, useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import { UserContext } from "../../providers/UserProvider";

const CreateList = ({ onClose }) => {
  const { createList } = useContext(ListOverviewContext);
  const { loggedInUser } = useContext(UserContext);
  const [listName, setListName] = useState("");
  const [guestList, setGuestList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(listName, loggedInUser, guestList);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="formGroupExampleInput">
          Enter name for your list
        </label>
        <input
          type="text"
          className="form-control"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="formGroupExampleInput2">
          Enter IDs of user you want to invite
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="u1, u2, u3,..."
          value={guestList}
          onChange={(e) => setGuestList(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create list
      </button>
    </form>
  );
};

export default CreateList;
