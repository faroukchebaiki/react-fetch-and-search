import Search from "./Search";

// Hero-style header that introduces the app and hosts the search control.
const Header = ({ onSearchChange, placeholder, searchTerm }) => (
  <header className="hero app-hero">
    <div className="hero-body">
      <p className="title has-text-white">React Fetch &amp; Search</p>
      <p className="subtitle has-text-white">
        Explore sample user data sourced from{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder
        </a>
        . Filter the list in real time by typing a name below.
      </p>
      <Search
        onChange={onSearchChange}
        placeholder={placeholder}
        value={searchTerm}
      />
    </div>
  </header>
);

export default Header;
