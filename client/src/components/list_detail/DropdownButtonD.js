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
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  cs: { nativeName: "Čeština" },
};

const DropdownButton = () => {
  const { t, i18n } = useTranslation();

  const { userList, setLoggedInUser, language, setLanguage, theme, setTheme } =
    useContext(UserContext);
  const { fetchList } = useContext(ListDetailContext);
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark-theme");
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.resolvedLanguage === "en" ? "cs" : "en";
    i18n.changeLanguage(newLanguage);
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
        <li>
          <button className="dropdown-item" onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} />
            {lngs[i18n.resolvedLanguage === "en" ? "cs" : "en"].nativeName}
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={handleChangeTheme}>
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              style={{ marginRight: "5px" }}
            />
            {theme === "light" ? t("topBar.themeDark") : t("topBar.themeLight")}
          </button>
        </li>
        <li className="dropdown-submenu position-relative">
          <button
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
            {t("topBar.changeProfile")}
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
      </ul>
    </div>
  );
};

export default DropdownButton;
