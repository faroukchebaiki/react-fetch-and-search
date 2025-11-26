// Controlled search input used to filter the user list.
const Search = ({ onChange, placeholder, value }) => (
  <div className="container is-max-desktop search-container">
    <input
      className="input is-rounded is-primary"
      type="search"
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Search;
