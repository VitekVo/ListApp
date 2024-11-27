import React from "react";

function Item({ item, deleteItem, changeItem }) {
  return (
    <div className="item">
      <button className="delete-btn" onClick={() => deleteItem(item.id)}>
        Delete
      </button>

      <div className="item-details">
        <h6 className="item-name">{item.name}</h6>
        <p className="item-qty">Qty: {item.qty}</p>
      </div>

      <button className="check-btn" onClick={() => changeItem(item.id)}>
        {item.checked ? "Uncheck" : "Check off"}
      </button>
    </div>
  );
}

export default Item;
