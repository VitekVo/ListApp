import React, { useContext, useEffect, useState } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

import ControlPanel from "./ControlPanel";
import ItemOverview from "./ItemOverview";
import TopBarDetail from "./TopBarDetail";

function ListDetail() {
  const { theList } = useContext(ListDetailContext);
  const { loggedInUser } = useContext(UserContext);
  const [userHasAccess, setUserHasAccess] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (theList?.host && loggedInUser) {
  //     const access =
  //       loggedInUser === theList.host || theList.guests.includes(loggedInUser);
  //     setUserHasAccess(access);
  //   }
  // }, [loggedInUser, theList]);

  // useEffect(() => {
  //   if (!userHasAccess) {
  //     const timer = setTimeout(() => {
  //       navigate("/");
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [userHasAccess, navigate]);

  // if (!userHasAccess) {
  //   return (
  //     <div className="access-denied">
  //       <h3>Access Denied</h3>
  //       <p>
  //         You do not have access to this list. Redirecting to List Overview...
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="list-detail">
      <TopBarDetail />
      <ControlPanel />
      <ItemOverview />
    </div>
  );
}

export default ListDetail;
