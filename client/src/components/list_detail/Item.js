import React from "react";

function Item({ item, removeItem, changeItem }) {
  return (
    <div className="item">
      <button className="delete-btn" onClick={() => removeItem(item._id)}>
        Delete
      </button>
      <div className="item-details">
        <h6 className="item-name">{item.name}</h6>
        <p className="item-qty">Qty: {item.qty}</p>
      </div>
      <button
        className="check-btn"
        onClick={() => changeItem(item._id, !item.checked)}
      >
        {item.checked ? "Uncheck" : "Check off"}
      </button>
    </div>
  );
}

export default Item;
