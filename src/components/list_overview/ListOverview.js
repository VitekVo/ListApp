import React, { useContext } from "react";
import TopBarOverview from "./TopBarOverview";
import HostLists from "./HostLists";
import GuestLists from "./GuestLists";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";
import { UserContext } from "../../providers/UserProvider";

function ListOverview() {
  const { loggedInUser } = useContext(UserContext);
  const { lists } = useContext(ListOverviewContext);

  const hostLists = lists.filter((list) => list.host === loggedInUser);
  const guestLists = lists.filter((list) => list.guests.includes(loggedInUser));

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
