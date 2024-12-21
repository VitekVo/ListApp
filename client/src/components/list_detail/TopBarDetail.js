import React from "react";
import { useNavigate } from "react-router-dom";
import DropdownButtonD from "../list_detail/DropdownButtonD";
import { useTranslation } from "react-i18next";

function TopBarDetail() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        {t("topBar.appName")}
      </button>
      <DropdownButtonD />
    </div>
  );
}

export default TopBarDetail;
