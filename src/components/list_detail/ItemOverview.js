import React from 'react';
// import { ListDetailProvider } from './providers/ListDetailProvider';
import Item from './Item';

function ItemOverview() {
    return (
        <div>
            <div className="filter-dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
                <ul className="dropdown-menu">
                    <li><p className="dropdown-item">Missing</p></li>
                    <li><p className="dropdown-item">All</p></li>
                 </ul>
            </div> 
            <div className="item-overview">
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        </div>
    );
}

export default ItemOverview;
