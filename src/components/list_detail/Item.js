import React from 'react';

function Item ({item, deleteItem, changeItem}) {
    return (
        <div className="item position-relative border p-3 rounded bg-light shadow-sm d-flex flex-column justify-content-between" 
        style={{ maxWidth: "200px", width: "100%" }}>
          <button 
            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" 
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
          
          <div className="mb-3">
            <h6 className="fw-bold mb-1">{item.name}</h6>
            <p className="mb-0">Qty: {item.qty}</p>
          </div>
          
          <button 
            className="btn btn-success btn-sm position-absolute bottom-0 end-0 m-2" 
            onClick={() => changeItem(item.id)}
          >
            {item.checked ? "Uncheck" : "Check off"}
          </button>
        </div>
      );
}

export default Item;
