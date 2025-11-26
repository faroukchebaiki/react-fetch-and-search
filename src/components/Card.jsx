// Normalize website URLs by guaranteeing a protocol prefix or returning null.
const normalizeWebsite = (website) => {
  if (!website) {
    return null;
  }

  if (website.startsWith("http://") || website.startsWith("https://")) {
    return website;
  }

  return `https://${website}`;
};

// Presentation component that renders a single user's details in a Bulma card.
const Card = ({ user }) => {
  const { name, username, email, phone, website, company, address } = user;

  // Derived display values to keep JSX readable.
  const websiteUrl = normalizeWebsite(website);
  const companyName = company?.name ?? "Independent";
  const locationParts = [address?.city, address?.suite].filter(Boolean);
  const location = locationParts.length > 0 ? locationParts.join(", ") : null;

  return (
    <article className="card mycard">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={`https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`}
                alt={`${name}'s avatar`}
                loading="lazy"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">@{username}</p>
            <p className="subtitle is-7">{companyName}</p>
          </div>
        </div>

        <div className="content">
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} aria-label={`Send email to ${name}`}>
              {email}
            </a>
          </p>

          {phone && (
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phone}`} aria-label={`Call ${name}`}>
                {phone}
              </a>
            </p>
          )}

          {websiteUrl && (
            <p>
              <strong>Website:</strong>{" "}
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                {websiteUrl.replace(/^https?:\/\//, "")}
              </a>
            </p>
          )}

          {location && (
            <p>
              <strong>Location:</strong> {location}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
