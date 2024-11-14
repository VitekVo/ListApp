import React, { useContext } from "react";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";

const DeleteList = ({ onClose, listID }) => {
  const { deleteList } = useContext(ListOverviewContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteList(listID);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Are you sure you want to delete this list?
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Delete list
      </button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Cancel
      </button>
    </form>
  );
};

export default DeleteList;
