import "./AddItem.css";
import { useState } from "react";

function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        value={title}
        type="text"
        className="Input"
        placeholder="Add items"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label for="input-items"></label>
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
