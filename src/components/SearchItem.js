export default function SearchItem({
  searchTerm,
  shoppingItems,
  onhandleFilteredItem,
}) {
  const filteredItems = shoppingItems.filter((item) =>
    item.name.en.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ul className="Search-List">
      {filteredItems.map((item) => (
        <li
          className="Search-List-Item"
          key={item._id}
          onClick={() => {
            onhandleFilteredItem(item);
          }}
        >
          {item.name.en}
        </li>
      ))}
    </ul>
  );
}
