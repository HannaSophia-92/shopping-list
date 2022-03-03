import "./App.css";
import { useState } from "react";
import listItems from "./data";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

function App() {
  const [items, setItems] = useState(listItems);

  function handleDeleteItem(itemID) {
    setItems(items.filter((item) => item._id !== itemID));
  }

  return (
    <main className="App">
      <Header />
      <AddItem />
      <ListItem listItems={items} onDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default App;
