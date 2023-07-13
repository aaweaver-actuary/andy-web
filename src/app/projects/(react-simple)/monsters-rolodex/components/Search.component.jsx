import PropTypes from 'prop-types';

const Search = ({ placeholder, handleQueryTyping }) => {
  return (
    <div>
      <input
        type="search"
        className={`border-black border-[1px] rounded-lg mb-[50px] p-[10px] w-[150px] leading-[30px] hover:shadow-lg`}
        placeholder={placeholder}
        onChange={handleQueryTyping}
      />
    </div>
  );
};
Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleQueryTyping: PropTypes.func.isRequired,
};

export default Search;
