import React, { useContext, useState } from "react";
import Item from "./Item";
import { ListDetailContext } from "../../providers/ListDetailProvider";

function ItemOverview() {
  const { list, changeItem, deleteItem } = useContext(ListDetailContext);
  const [itemFilter, setItemFilter] = useState(true);

  const handleFilter = () => {
    setItemFilter((prevState) => !prevState);
  };

  const filteredItems =
    itemFilter === false
      ? list.items
      : list.items.filter((item) => !item.checked);

  return (
    <div>
      <div className="filter-dropdown">
        <button className="dropdown-item" onClick={() => handleFilter()}>
        {itemFilter ? "Missing" : "All"} items:
        </button>
      </div>
      <div className="item-overview">
        {filteredItems.map((item) => (
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
