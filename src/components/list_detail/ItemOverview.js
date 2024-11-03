import React, { useContext } from 'react';
import Item from './Item';
import { ListDetailContext } from '../../providers/ListDetailProvider';

function ItemOverview() {
    const { list, changeItem } = useContext(ListDetailContext)
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
            {list.items.map(item => ( 
                <Item key={item.id} name={item.name} quantity={item.quantity} changeItem={changeItem}/> ))}
            </div>        
        </div>
    );
}

export default ItemOverview;
