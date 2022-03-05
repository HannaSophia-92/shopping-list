import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import { nanoid } from "nanoid";
import SearchItem from "./components/SearchItem";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  // const [apiURL, setApiURL] = useState(
  //   "https://fetch-me.vercel.app/api/shopping/items"
  // );

  useEffect(() => {
    loadItems();
    async function loadItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data = await response.json();
        setShoppingList(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

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

  // function handleSearchItem(itemName) {
  //   shoppingList.filter((item) => {
  //     return item.name.en.match(itemName);
  //   });
  // }

  return (
    <main className="App">
      <Header />
      <AddItem onAddItem={handleAddNewItem} />
      <SearchItem listItems={shoppingList} />
      <ListItem listItems={shoppingList} onDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default App;
