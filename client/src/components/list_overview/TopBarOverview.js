import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DropdownButton from "./DropdownButtonO";
import Modal from "../modalsforms/Modal";

function TopBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(null);

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        {t("topBar.appName")}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => openModal("createList")}
      >
        {t("topBar.createListButton")}
      </button>
      <DropdownButton />
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default TopBar;
