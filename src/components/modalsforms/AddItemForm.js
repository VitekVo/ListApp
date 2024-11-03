import React, { useState, useContext } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';

const AddItem = ({ onClose }) => {
  const { changeName } = useContext(ListDetailContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName(name);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name of item</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity of item</label>
        <input
          type="number"
          className="form-control"
          value={name}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add item</button>
    </form>
  );
};

export default AddItem;
