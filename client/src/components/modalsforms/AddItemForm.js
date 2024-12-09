import React, { useState, useContext } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';

const AddItem = ({ onClose }) => {
  const { addItem } = useContext(ListDetailContext);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName, quantity);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="item-name" className="form-label">Enter item name</label>
        <input
          type="text"
          id="item-name"
          name="itemName"
          className="form-control"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="item-quantity" className="form-label">Enter quantity</label>
        <input
          type="number"
          id="item-quantity"
          name="itemQuantity"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Item</button>
    </form>
  );
};

export default AddItem;
