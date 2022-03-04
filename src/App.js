import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import { nanoid } from "nanoid";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [apiURL, setApiURL] = useState(
    "https://fetch-me.vercel.app/api/shopping/items"
  );

  useEffect(() => {
    loadItems();
    async function loadItems() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setShoppingList(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [apiURL]);

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
