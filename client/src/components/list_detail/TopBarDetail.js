import React from "react";
import { useNavigate } from "react-router-dom";
import DropdownButtonD from "../list_detail/DropdownButtonD";

function TopBarDetail() {
  const navigate = useNavigate();

  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        MrLister
      </button>
      <DropdownButtonD />
    </div>
  );
}

export default TopBarDetail;
