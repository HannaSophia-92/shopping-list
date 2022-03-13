import "./List.css";

export default function ListItem({ item, deleteItem }) {
  return (
    <li className="List__items" onClick={() => deleteItem(item._id)}>
      {item.name.en}
    </li>
  );
}
