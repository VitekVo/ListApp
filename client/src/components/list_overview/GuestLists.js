import React, { useState } from "react";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faBox } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function GuestLists({ guestLists }) {
  const { t } = useTranslation();
  const [archivedFilter, setArchivedFilter] = useState(false);

  const handleFilter = () => {
    setArchivedFilter((prevState) => !prevState);
  };

  return (
    <div className="other-lists">
      <div className="column-header">
        <h1 className="lists-title">{t("listOverview.sharedLists")}</h1>
        <button
          className="btn btn-primary archived-button"
          onClick={() => handleFilter()}
        >
          <span className="filter-text">
            {archivedFilter
              ? t("listOverview.archivedButtonTrue")
              : t("listOverview.archivedButtonFalse")}
          </span>
          <FontAwesomeIcon
            icon={archivedFilter ? faBox : faBoxOpen}
            className="archived-icon"
            style={{ marginRight: "5px" }}
          />
        </button>
      </div>
      <div className="list-container">
        {guestLists
          .filter((list) => list.archived === archivedFilter)
          .map((list) => (
            <List key={list._id} list={list} />
          ))}
      </div>
    </div>
  );
}

export default GuestLists;
