import React, { useContext } from "react";
import TopBarOverview from "./TopBarOverview";
import HostLists from "./HostLists";
import GuestLists from "./GuestLists";
import LoadingModal from "../modalsforms/LoadingModal";
import { UserContext } from "../../providers/UserProvider";
import { ListOverviewContext } from "../../providers/ListOverviewProvider";

function ListOverview() {
  const { loggedInUser, loading } = useContext(UserContext);
  const { lists } = useContext(ListOverviewContext);

  const hostLists = lists.filter((list) => list.host === loggedInUser);
  const guestLists = lists.filter((list) => list.guests.includes(loggedInUser));

  return (
    <div className="list-overview">
      <LoadingModal loading={loading} />
      <TopBarOverview />
      <div className="grid-lists">
        <HostLists hostLists={hostLists} />
        <GuestLists guestLists={guestLists} />
      </div>
    </div>
  );
}

export default ListOverview;
