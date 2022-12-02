export default function Search({handelChange , placeholder}) {
  return (
    <div className="container is-max-desktop">
      <input
        className="input is-rounded is-primary "
        type="search"
        placeholder={placeholder}
        onChange={handelChange}
      />
    </div>
  );
}
