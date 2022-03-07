import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import List from "./components/List";
import { nanoid } from "nanoid";
import SearchItem from "./components/SearchItem";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import SearchBar from "./components/Searchbar";

function App() {
  const [shoppingList, setShoppingList] = useState(
    loadFromLocal("items") ?? []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    loadShoppingItems();
    async function loadShoppingItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data = await response.json();
        setShoppingItems(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    saveToLocal("items", shoppingList);
  }, [shoppingList]);

  return (
    <div className="App">
      <Header />

      <AddItem onAddItem={handleAddNewItem} />
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      {searchTerm && (
        <SearchItem
          searchTerm={searchTerm}
          shoppingItems={shoppingItems}
          onhandleFilteredItem={handleFilteredItem}
        />
      )}
      <List shoppingList={shoppingList} onDeleteItem={handleDeleteItem} />
    </div>
  );

  function handleFilteredItem(shoppingItem) {
    if (shoppingList.find((item) => item._id === shoppingItem._id)) {
      alert("You already added the item");
      setSearchTerm("");
    } else {
      setSearchTerm("");
      setShoppingList([...shoppingList, shoppingItem]);
    }
  }

  function handleSearch(title) {
    setSearchTerm(title);
  }

  function handleDeleteItem(itemID) {
    setShoppingList(shoppingList.filter((item) => item._id !== itemID));
  }

  function handleAddNewItem(name) {
    setShoppingList([
      ...shoppingList,
      {
        _id: nanoid(),
        _type: "shopping.item",
        category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
        name: { en: name, de: "" },
      },
    ]);
  }
}

export default App;
