import React, { useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import { UserContext } from "../../providers/UserProvider";
import { useTranslation } from "react-i18next";

const DeleteList = ({ onClose }) => {
  const { t } = useTranslation();
  const { removeList } = useContext(ListOverviewContext);
  const { activeList } = useContext(UserContext);
  const { lists } = useContext(ListOverviewContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const listToDelete = activeList;
    removeList(listToDelete);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="form-label">
          <p>{t("modalsForms.deleteListModal.youSure")}</p>
          <p>
            <strong>
              {lists.find((list) => list._id === activeList).name}
            </strong>
          </p>
        </div>
      </div>
      <button type="submit" className="btn btn-danger">
        {t("modalsForms.deleteListModal.confirmDelete")}
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        {t("modalsForms.deleteListModal.cancelDelete")}
      </button>
    </form>
  );
};

export default DeleteList;
