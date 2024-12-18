import React, { useContext, useState } from "react";
import Item from "./Item";
import { ListDetailContext } from "../../providers/ListDetailProvider";

function ItemOverview() {
  const { theList, changeItem, removeItem } = useContext(ListDetailContext);
  const [itemFilter, setItemFilter] = useState(true);

  const handleFilter = () => {
    setItemFilter((prevState) => !prevState);
  };

  const filteredItems =
    itemFilter === false
      ? theList.items
      : theList.items.filter((item) => !item.checked);

  return (
    <div>
      <div className="filter-items">
        <button className="dropdown-item" onClick={() => handleFilter()}>
          {itemFilter ? "Missing" : "All"} items:
        </button>
      </div>
      <div className="item-overview">
        {filteredItems.map((item) => (
          <Item
            key={item._id}
            item={item}
            changeItem={changeItem}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemOverview;
