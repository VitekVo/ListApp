import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

function TopBarDetail() {
  const navigate = useNavigate();
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleClick = (userId) => {
    setLoggedInUser(userId);
  };

  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        MrLister
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
                onClick={() => handleClick(user.id)}
              >
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopBarDetail;
