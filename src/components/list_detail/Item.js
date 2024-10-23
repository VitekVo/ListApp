// import React from 'react';
// import { ListDetailProvider } from './providers/ListDetailProvider';


function Item() {
    return (
    <div className="item">
        <h3>Apple</h3>
        <button className="btn btn-danger">Delete</button>
        <p>Qty: 2</p>
        <button className="btn btn-success">Tick off</button>
    </div>
    );
}

export default Item;
