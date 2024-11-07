import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import Modal from "../modalsforms/Modal";

function TopBar() {
  const navigate = useNavigate();
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

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
        MrLister
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => openModal("createList")}
      >
        Create new list
      </button>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {userList.find((user) => user.id === loggedInUser)?.name}
        </button>
        <ul className="dropdown-menu">
          {userList.map((user) => (
            <li key={user.id}>
              <button
                className="dropdown-item"
                onClick={() => setLoggedInUser(user.id)}
              >
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default TopBar;
