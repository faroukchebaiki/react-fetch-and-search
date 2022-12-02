import Search from "./search";
export default function Top({handelChange , placeholder}) {
  return (
    <section className="hero" style={{ borderBottom: "1px solid white"}}>
      <div className="hero-body" style={{color: "white" }}>
        <p className="title" style={{color: "white" }}>Farouk</p>
        <p className="subtitle" style={{color: "white" }}>this is just fetching and searching</p>
        <Search handelChange={handelChange}  placeholder={placeholder} />
      </div>
    </section>
  );
}
