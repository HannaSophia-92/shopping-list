import "./AddItem.css";
import { useState } from "react";

function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <label htmlFor="new-item">What do you want to buy?</label>
      <input
        value={title}
        id="new-item"
        type="text"
        className="Input"
        placeholder="Add items"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddItem;
