import React, { useContext, useEffect } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

import ControlPanel from "./ControlPanel";
import ItemOverview from "./ItemOverview";
import TopBarDetail from "./TopBarDetail";

function ListDetail() {
  const { list } = useContext(ListDetailContext);
  const { loggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  const userHasAccess =
    loggedInUser === list.host || list.guests.includes(loggedInUser);

  useEffect(() => {
    if (!userHasAccess) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [userHasAccess, navigate]);

  if (!userHasAccess) {
    return (
      <div className="access-denied">
        <h3>Access Denied</h3>
        <p>
          You do not have access to this list. Redirecting to List Overview...
        </p>
      </div>
    );
  }

  return (
    <div className="list-detail">
      <TopBarDetail />
      <ControlPanel />
      <ItemOverview />
    </div>
  );
}

export default ListDetail;
