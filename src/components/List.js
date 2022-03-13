import "./List.css";
import ListItem from "./ListItem";

export default function List({ shoppingList, onDeleteItem }) {
  return (
    <ul className="List">
      {shoppingList.map((item) => {
        return (
          <ListItem item={item} key={item._id} deleteItem={onDeleteItem} />
        );
      })}
    </ul>
  );
}
