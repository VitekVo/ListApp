import React, { useState, useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";

const CreateList = ({ onClose }) => {
  const { createList } = useContext(ListOverviewContext);
  const [listName, setListName] = useState("");
  const [guestList, setGuestList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(listName, guestList);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="formGroupExampleInput">Example label</label>
        <input
          type="text"
          class="form-control"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input
          type="text"
          class="form-control"
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
