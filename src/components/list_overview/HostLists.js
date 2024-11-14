import React, { useState } from "react";
import List from "./List";

function HostLists({ hostLists }) {
  const [archivedFilter, setArchivedFilter] = useState(false);

  const handleFilter = () => {
    setArchivedFilter((prevState) => !prevState);
  };

  return (
    <div className="your-lists">
      <div className="column-header">
        <h1>Your lists</h1>
        <button className="btn btn-primary" onClick={() => handleFilter()}>
          Showing {archivedFilter ? "Archived" : "Not Archived"}
        </button>
      </div>
      <div className="list-container">
        {hostLists
          .filter((list) => list.archived === archivedFilter)
          .map((list) => (
            <List key={list.id} list={list} />
          ))}
      </div>
    </div>
  );
}

export default HostLists;
