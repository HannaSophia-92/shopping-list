import "./App.css";
import { useState } from "react";
import listItems from "./data";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import "./components/List.css";

function App() {
  const [items, setItems] = useState(listItems);

  function handleDeleteItem(itemID) {
    setItems(items.filter((item) => item._id !== itemID));
  }

  return (
    <main className="App">
      <Header />
      <ul className="List">
        {items.map((item) => (
          <ListItem
            key={item._id}
            item={item}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <AddItem />
    </main>
  );
}

export default App;
