import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useTranslation } from "react-i18next";

function NoAccessModal() {
  const { t } = useTranslation();
  const { hasSeenModal, setHasSeenModal } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!hasSeenModal) {
      setShowModal(true);
      setHasSeenModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="loading-modal">
          <div className="loading-modal-content">
            <p>{t("modalsForms.announceModal.message")}</p>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NoAccessModal;
