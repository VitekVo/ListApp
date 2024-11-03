import React, { useContext, useState } from 'react';
import Item from './Item';
import { ListDetailContext } from '../../providers/ListDetailProvider';

function ItemOverview() {
    const { list, changeItem, deleteItem } = useContext(ListDetailContext)
    const [itemFilter, setItemFilter] = useState("missing");

    const filteredItems = itemFilter === "all" 
    ? list.items 
    : list.items.filter(item => !item.checked);

    return (
        <div>
          <div className="filter-dropdown">
            <button 
              type="button" 
              className="btn btn-primary dropdown-toggle" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              {itemFilter === "missing" ? "Missing" : "All"}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => setItemFilter("missing")}>
                  Missing
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setItemFilter("all")} >
                  All
                </button>
              </li>
            </ul>
          </div> 
    
          <div className="item-overview">
            {filteredItems.map(item => ( 
              <Item 
                key={item.id} 
                item={item} 
                changeItem={changeItem} 
                deleteItem={deleteItem} 
              />
            ))}
          </div>      
        </div>
      );
}

export default ItemOverview;
