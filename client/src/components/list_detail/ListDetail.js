import React, { useState, useContext, useEffect } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";

import ControlPanel from "./ControlPanel";
import ItemOverview from "./ItemOverview";
import TopBarDetail from "./TopBarDetail";
import NoAccessModal from "../modalsforms/NoAccessModal";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

function ListDetail() {
  const { theList } = useContext(ListDetailContext);
  const { loggedInUser } = useContext(UserContext);
  const [userAccess, setUserAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUserAccess(
      loggedInUser === theList.host || theList.guests.includes(loggedInUser)
    );
  }, [loggedInUser, theList]);

  useEffect(() => {
    if (!userAccess) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [userAccess, navigate]);

  return (
    <div className="list-detail">
      {!userAccess && <NoAccessModal />}
      <TopBarDetail />
      <ControlPanel />
      <ItemOverview />
    </div>
  );
}

export default ListDetail;
