import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Item({ item, removeItem, changeItem }) {
  const { t } = useTranslation();
  return (
    <div className="item">
      <button className="delete-btn" onClick={() => removeItem(item._id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <div className="item-details">
        <h6 className="item-name">{item.name}</h6>
        <p className="item-qty">
          {t("listDetail.itemQuantity")}: {item.quantity}
        </p>
      </div>
      <button
        className="check-btn"
        onClick={() => changeItem(item._id, !item.checked)}
      >
        <FontAwesomeIcon icon={item.checked ? faUndo : faCheck} />
      </button>
    </div>
  );
}

export default Item;
