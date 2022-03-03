import "./List.css";

function ListItem({ item, onDeleteItem }) {
  return (
    <li>
      <button onClick={() => onDeleteItem(item._id)} className="Button">
        {item.name.en}
      </button>
    </li>
  );
}

export default ListItem;
