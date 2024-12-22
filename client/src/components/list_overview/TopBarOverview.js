import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DropdownButton from "./DropdownButtonO";
import Modal from "../modalsforms/Modal";
import { UserContext } from "../../providers/UserProvider";

function TopBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loggedInUser, loggedUserName } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(null);

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="top-bar">
      <button
        className="btn btn-secondary top-left"
        onClick={() => navigate("/")}
      >
        {t("topBar.appName")}
      </button>
      {loggedInUser && (
        <button
          className="btn btn-secondary top-center"
          onClick={() => openModal("createList")}
        >
          {t("topBar.createListButton")}
        </button>
      )}
      <div className="top-right">
        {loggedUserName}
        {!loggedUserName && t("topBar.selectProfile")}
        <DropdownButton />
      </div>
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default TopBar;
