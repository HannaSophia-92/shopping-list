import "./App.css";
import { useState } from "react";
import listItems from "./data";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import { nanoid } from "nanoid";

let nextId = 1;

function App() {
  const [shoppingList, setShoppingList] = useState(listItems);

  function handleDeleteItem(itemID) {
    setShoppingList(shoppingList.filter((item) => item._id !== itemID));
  }

  function handleAddNewItem(name) {
    setShoppingList([
      ...shoppingList,
      {
        _id: nanoid(),
        name: { en: name, de: "" },
      },
    ]);
  }

  return (
    <main className="App">
      <Header />
      <AddItem onAddItem={handleAddNewItem} />
      <ListItem listItems={shoppingList} onDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default App;
