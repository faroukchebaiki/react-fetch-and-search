export default function Card(props) {
  return (
    <div>
      <div className="card mycard">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="cover"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="profile"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.user.name}</p>
              <p className="subtitle is-6">@{props.user.username}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <h6>{props.user.email}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
