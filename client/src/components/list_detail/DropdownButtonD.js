import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faGlobe,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { ListDetailContext } from "../../providers/ListDetailProvider";
const DropdownButton = () => {
  const { userList, setLoggedInUser, language, setLanguage, theme, setTheme } =
    useContext(UserContext);
  const { fetchList } = useContext(ListDetailContext);
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark-theme");
  };

  const handleChangeLanguage = () => {
    setLanguage(language === "en" ? "cs" : "en");
  };

  const handleChangeUser = (userId) => {
    setLoggedInUser(userId);
    fetchList(userId);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className="dropdown-menu">
        <li className="dropdown-submenu position-relative">
          <button
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
            Change Profile
          </button>
          <ul className="dropdown-menu">
            {userList.map((user) => (
              <li key={user.id}>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    handleChangeUser(user.id);
                  }}
                >
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <button className="dropdown-item" onClick={handleChangeLanguage}>
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} />
            {language === "en" ? "Czech" : "English"}
          </button>
        </li>

        <li>
          <button className="dropdown-item" onClick={handleChangeTheme}>
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              style={{ marginRight: "5px" }}
            />
            {theme === "light" ? "Dark Theme" : "Light Theme"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
