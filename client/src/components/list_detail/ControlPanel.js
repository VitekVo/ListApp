import React, { useState, useContext } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import Modal from "../modalsforms/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function ControlPanel() {
  const { t } = useTranslation();
  const { theList } = useContext(ListDetailContext);
  const { loggedInUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(null);

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="control-panel">
      <div className="header-one">
        {theList.name}
        {loggedInUser === theList.host && (
          <button
            className="btn btn-light"
            onClick={() => openModal("changeName")}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => openModal("addItem")}
        >
          {t("listDetail.addItemButton")}
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => openModal("manageUsers")}
        >
          {t("listDetail.invitedUsersButton")}
        </button>
      </div>
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default ControlPanel;
