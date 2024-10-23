import React from 'react';
// import { ListDetailProvider } from './providers/ListDetailProvider';
import Item from './Item';

function ItemOverview() {
    return (
        <div className="item-overview">
            <button className="btn btn-secondary">Filter</button>
            <Item></Item>
        </div>
    );
}

export default ItemOverview;
