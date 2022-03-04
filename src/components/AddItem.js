import "./AddItem.css";
import { useState } from "react";

function AddItem({ onAddItem }) {
  const [item, setItem] = useState("");
  return (
    <>
      <label htmlFor="new-item">What do you want to buy?</label>
      <input
        value={item}
        id="new-item"
        type="text"
        className="Input"
        placeholder="Add items"
        onChange={(event) => setItem(event.target.value)}
      />
      <button
        onClick={() => {
          setItem("");
          onAddItem(item);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddItem;
