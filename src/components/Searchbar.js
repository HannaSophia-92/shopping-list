import './Form.css';

export default function SearchBar({ onSearch, searchTerm }) {
  return (
    <form className="Form" onSubmit={event => event.preventDefault()}>
      <label htmlFor="search" className="Label">
        Search for articles
      </label>
      <div className="SearchBar">
        <input
          id="search"
          type="text"
          className="Input"
          placeholder="Search items"
          value={searchTerm}
          onChange={event => {
            onSearch(event.target.value);
          }}
        />
      </div>
    </form>
  );
}
