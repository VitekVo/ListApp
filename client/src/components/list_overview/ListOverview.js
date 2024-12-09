import React, { useContext } from "react";
import TopBarOverview from "./TopBarOverview";
import HostLists from "./HostLists";
import GuestLists from "./GuestLists";
import { UserContext } from "../../providers/UserProvider";

function ListOverview() {
  const { loggedInUser, listList } = useContext(UserContext);

  const hostLists = listList.filter((list) => list.host === loggedInUser);
  const guestLists = listList.filter((list) =>
    list.guests.includes(loggedInUser)
  );

  return (
    <div>
      <TopBarOverview />
      <div className="grid-lists">
        <HostLists hostLists={hostLists} />
        <GuestLists guestLists={guestLists} />
      </div>
    </div>
  );
}

export default ListOverview;
