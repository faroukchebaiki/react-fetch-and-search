import Card from "./card";
export default function Cardlist(props) {
  return (
    <div className="list">
        {props.peoples.map(user => {
          return (
              <Card key={user.id} user={user}/>
          );
        })}

    </div>
  );
}
