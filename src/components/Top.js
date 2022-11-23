import Search from "./search";
export default function Top() {
  return (
    <section className="hero" style={{ borderBottom: "1px solid grey" }}>
      <div className="hero-body">
        <p className="title">Farouk</p>
        <p className="subtitle">this is just fetching and searching</p>
        <Search />
      </div>
    </section>
  );
}
