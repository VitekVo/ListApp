import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import Modal from "../modalsforms/Modal";

function List({ list }) {
  const navigate = useNavigate();
  const { setActiveList, loggedInUser } = useContext(UserContext);
  const { archiveList } = useContext(ListOverviewContext);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(null);

  const handleClick = (listID) => {
    setActiveList(listID);
    navigate(`/detail/${listID}`);
  };

  const openModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="list">
      <div className="list-content" onClick={() => handleClick(list.id)}>
        <h3>{list.name}</h3>
      </div>
      {loggedInUser === list.host && (
        <div className="list-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              archiveList(list.id);
            }}
            className="btn btn-warning"
          >
            {list.archived === true ? "Un-archive" : "Archive"}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal("deleteList");
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      )}
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default List;
