import React, { useContext, useState } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import { useTranslation } from "react-i18next";

const ManageUsers = () => {
  const { t } = useTranslation();
  const { theList, manageUsers } = useContext(ListDetailContext);
  const { userList, loggedInUser } = useContext(UserContext);
  const [userID, setUserID] = useState("");

  const guests = userList.filter((user) => theList.guests.includes(user.id));

  const handleSubmit = (userID, action) => {
    manageUsers(userID, action);
  };

  const handleAdd = () => {
    const action = "add";
    handleSubmit(userID, action);
    setUserID("");
  };

  const handleRemove = (userId) => {
    const action = "remove";
    handleSubmit(userId, action);
    setUserID("");
  };

  return (
    <form>
      <div>
        <h2 className="gueslist-header">
          {t("modalsForms.manageUsersModal.guestList")}
        </h2>
        <ul className="guest-list">
          {guests.map((guest) => (
            <li key={guest.id} className="guest-list-item">
              <span className="guest-name">{guest.name}</span>
              {loggedInUser === theList.host && (
                <button
                  type="button"
                  className="btn btn-danger remove-user-btn"
                  onClick={() => handleRemove(guest.id)}
                >
                  {t("modalsForms.manageUsersModal.removeUserButton")}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {loggedInUser === theList.host && (
        <div>
          <label htmlFor="invite-user" className="form-label">
            {t("modalsForms.manageUsersModal.enterUserId")}
          </label>
          <input
            type="text"
            id="invite-user"
            name="inviteUser"
            className="form-control"
            placeholder="e.g., 6768730c0cf44d341f8b4d50"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleAdd()}
          >
            {t("modalsForms.manageUsersModal.addUserButton")}
          </button>
        </div>
      )}

      {loggedInUser !== theList.host && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleRemove(loggedInUser)}
        >
          {t("modalsForms.manageUsersModal.leaveListButton")}
        </button>
      )}
    </form>
  );
};

export default ManageUsers;
