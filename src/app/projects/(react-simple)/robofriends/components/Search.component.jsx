const Search = ({ query, setQuery }) => {
  return (
    <div className="flex w-[80vw] justify-center p-2">
      <input
        type="search"
        placeholder="filter robots by name..."
        className="border-black border-[1px] rounded-lg p-3 shadow-md w-[300px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out lr-shake bg-blue-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
