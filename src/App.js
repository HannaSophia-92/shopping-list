import "./App.css";
import { useState } from "react";
import listItems from "./data";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

let nextId = 1;

function App() {
  const [items, setItems] = useState(listItems);

  function handleDeleteItem(itemID) {
    setItems(items.filter((item) => item._id !== itemID));
  }

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        _id: `c2hvcHBpbmcuaXRlbTox${nextId++}`,
        name: { en: title, de: "" },
      },
    ]);
  }

  return (
    <main className="App">
      <Header />
      <AddItem onAddItem={handleAddItem} />
      <ListItem listItems={items} onDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default App;
