import "./AddItem.css";
import { useState } from "react";

function SearchItem({ onSearchItem, listItems }) {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <label htmlFor="search">What do you want to buy?</label>
      <div className="SearchBar">
        <input
          id="search"
          type="text"
          className="Input"
          placeholder="Search items"
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <ul className="List">
          {listItems
            .filter((item) => {
              if (searchItem === "") {
                return "";
              } else if (
                item.name.en.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <li key={item._id} item={item}>
                  <button className="Button">{item.name.en}</button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default SearchItem;
