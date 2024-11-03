// import React from 'react';
// import { ListDetailProvider } from './providers/ListDetailProvider';


const Item = ({name, qty, changeItem}) => {
    return (
    <div className="item">
        <h3>{name}</h3>
        <button className="btn btn-danger">Delete</button>
        <p>{qty}</p>
        <button className="btn btn-success" onClick={() => changeItem(true)}>Check off</button>
    </div>
    );
}

export default Item;
