import List from "./List";

function GuestLists({ guestLists }) {
  return (
    <div className="item-lists">
      <h1>Lists you were invited to</h1>
      {guestLists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}

export default GuestLists;
