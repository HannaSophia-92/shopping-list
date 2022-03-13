import './Form.css';
import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(item);
    setItem('');
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="new-item" className="Label">
        What do you want to buy?
      </label>
      <div className="SearchBar">
        <input
          value={item}
          id="new-item"
          type="text"
          className="Input"
          placeholder="Add items"
          onChange={event => setItem(event.target.value)}
        />
        <button className="Button__Input">Add</button>
      </div>
    </form>
  );
}
