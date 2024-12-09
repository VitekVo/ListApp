import React, { useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import { UserContext } from "../../providers/UserProvider";

const DeleteList = ({ onClose }) => {
  const { deleteList } = useContext(ListOverviewContext);
  const { activeList, listList, loggedInUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const listToDelete = activeList;
    console.log("Deleting list:", listToDelete);
    deleteList(loggedInUser, listToDelete);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="form-label">
          <p>Are you sure you want to delete this list?</p>
          <p>
            <strong>
              {listList.find((list) => list.id === activeList).name}
            </strong>
          </p>
        </div>
      </div>
      <button type="submit" className="btn btn-danger">
        Delete list
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default DeleteList;
