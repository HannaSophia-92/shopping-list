import "./App.css";
import { useState } from "react";
import listItems from "./data";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

let nextId = 1;

function App() {
  const [shoppingList, setShoppingList] = useState(listItems);

  function handleDeleteItem(itemID) {
    setShoppingList(shoppingList.filter((item) => item._id !== itemID));
  }

  function handleAddItem(title) {
    setShoppingList([
      ...shoppingList,
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
      <ListItem listItems={shoppingList} onDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default App;
