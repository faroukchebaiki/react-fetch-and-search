import Card from "./Card";

const CardList = ({ people }) => (
  <div className="list" aria-live="polite">
    {people.map((user) => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);

export default CardList;
