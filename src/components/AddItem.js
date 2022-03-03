import "./AddItem.css";

function AddItem() {
  return (
    <>
      <input
        className="Input"
        name="items"
        id="input-items"
        placeholder="Add items"
      />
      <label for="input-items"></label>
      <button>Add</button>
    </>
  );
}

export default AddItem;
