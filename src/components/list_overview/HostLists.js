import List from "./List";

function HostLists({ hostLists }) {
  return (
    <div className="item-lists">
      <h1>Your lists</h1>
      {hostLists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}

export default HostLists;
