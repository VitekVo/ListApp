import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DropdownButton from "../list_detail/DropdownButtonD";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../providers/UserProvider";

function TopBarDetail() {
  const { t } = useTranslation();
  const { loggedUserName } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        {t("topBar.appName")}
      </button>
      <div className="top-right">
        {loggedUserName}
        <DropdownButton />
      </div>
    </div>
  );
}

export default TopBarDetail;
