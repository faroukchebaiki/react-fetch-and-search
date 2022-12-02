import Search from "./search";
export default function Top({handelChange , placeholder}) {
  return (
    <section className="hero" style={{ borderBottom: "1px solid white"}}>
      <div className="hero-body" style={{color: "white" }}>
        <p className="title" style={{color: "white" }}>React Fetch & Search</p>
        <p className="subtitle" style={{color: "white" }}>this is just fetching and searching in json file from this <a rel="noreferrer" href="https://jsonplaceholder.typicode.com/users" target='_blank'>link</a>.</p>
        <Search handelChange={handelChange}  placeholder={placeholder} />
      </div>
    </section>
  );
}
