function List(props) {
  const itemList = props.items;
  const category = props.category;

  // itemList.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical ASC
  // itemList.sort((a, b) => b.name.localeCompare(a.name)); // alphabetical DESC
  // itemList.sort((a, b) => a.calories - b.calories); // numeric ASC
  // itemList.sort((a, b) => b.calories - a.calories); // numeric DESC

  const lowCalFruits = itemList.filter((item) => item.calories < 100); // calories below 100

  const listItems = itemList.map((item, i) => (
    <li key={i}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
