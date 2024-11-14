import React, { useState } from "react";
import List from "./List";

function GuestLists({ guestLists }) {
  const [archivedFilter, setArchivedFilter] = useState(false);

  const handleFilter = () => {
    setArchivedFilter((prevState) => !prevState);
  };

  return (
    <div className="other-lists">
      <div className="column-header">
        <h1>Other's lists</h1>
        <button className="btn btn-primary" onClick={() => handleFilter()}>
          Showing {archivedFilter ? "Archived" : "Not Archived"}
        </button>
      </div>
      <div className="list-container">
        {guestLists
          .filter((list) => list.archived === archivedFilter)
          .map((list) => (
            <List key={list.id} list={list} />
          ))}
      </div>
    </div>
  );
}

export default GuestLists;
