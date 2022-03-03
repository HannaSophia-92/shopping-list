import "./List.css";

function ListItem({ listItems, onDeleteItem }) {
  return (
    <ul className="List">
      {listItems.map((item) => {
        return (
          <li key={item._id} item={item}>
            <button onClick={() => onDeleteItem(item._id)} className="Button">
              {item.name.en}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
