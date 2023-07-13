const Searchbar = ({ handleSearch }) => {
  return (
    <section>
      <input
        type="search"
        placeholder="Search Pokemon..."
        className="border-black border-[1px] rounded-md leading-8"
        onChange={handleSearch}
      />
    </section>
  );
};

export default Searchbar;
