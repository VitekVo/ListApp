import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import Modal from "../modalsforms/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArchive } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function List({ list }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { activeList, setActiveList, loggedInUser, userList } =
    useContext(UserContext);
  const { archiveList } = useContext(ListOverviewContext);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(null);
  const totalItems = list.items.length;
  const checkedItems = list.items.filter((item) => item.checked).length;

  const handleClick = (listId) => {
    setActiveList(listId);
    navigate("/detail/${listId}");
  };

  const handleArchive = (listId) => {
    const state = list.archived === true ? false : true;
    archiveList(listId, state);
  };

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="list">
      <div className="list-content" onClick={() => handleClick(list._id)}>
        <h3>{list.name}</h3>
        <h5>
          {t("singleList.host")}:{" "}
          {userList.find((user) => user.id === list.host)?.name}
        </h5>
        <h5>
          {t("singleList.itemsChecked")}: {checkedItems}/{totalItems}
        </h5>
      </div>
      {loggedInUser === list.host && (
        <div className="list-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleArchive(list._id);
            }}
            className="btn-archive "
          >
            <FontAwesomeIcon icon={faArchive} />{" "}
            {list.archived === true
              ? t("singleList.unarchiveButton")
              : t("singleList.archiveButton")}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveList(list._id);
              openModal("deleteList");
            }}
            className="btn-delete"
          >
            <FontAwesomeIcon icon={faTrash} />
            {t("singleList.deleteButton")}
          </button>
        </div>
      )}
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default List;
