import React, { useState, useContext } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";

const ChangeName = ({ onClose }) => {
  const { changeName } = useContext(ListDetailContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName(name);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter new name for this list</label>
        <input
          type="text"
          className="form-control"
          maxlength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Change name
      </button>
    </form>
  );
};

export default ChangeName;
