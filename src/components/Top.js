import Search from "./search";
export default function Top() {
  return (
    <section className="hero" style={{ borderBottom: "1px solid white"}}>
      <div className="hero-body" style={{color: "white" }}>
        <p className="title" style={{color: "white" }}>Farouk</p>
        <p className="subtitle" style={{color: "white" }}>this is just fetching and searching</p>
        <Search />
      </div>
    </section>
  );
}
