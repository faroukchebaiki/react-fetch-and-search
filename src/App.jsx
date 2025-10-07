import { useEffect, useMemo, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchPeople = async () => {
      setStatus("loading");

      try {
        const response = await fetch(USERS_ENDPOINT, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load users right now. Please try again.");
        }

        const users = await response.json();
        setPeople(users);
        setStatus("ready");
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setErrorMessage(error.message);
        setStatus("error");
      }
    };

    fetchPeople();

    return () => controller.abort();
  }, []);

  const filteredPeople = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return people;
    }

    return people.filter((person) =>
      person.name.toLowerCase().includes(normalizedTerm)
    );
  }, [people, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <Header
        onSearchChange={handleSearchChange}
        placeholder="Search users"
        searchTerm={searchTerm}
      />
      <main className="content-wrapper">
        {status === "loading" && (
          <p className="status-message" role="status">
            Loading users…
          </p>
        )}

        {status === "error" && (
          <p className="status-message error" role="alert">
            {errorMessage || "We ran into a problem fetching users."}
          </p>
        )}

        {status === "ready" && filteredPeople.length === 0 && (
          <p className="status-message" role="status">
            No users found for “{searchTerm}”.
          </p>
        )}

        {filteredPeople.length > 0 && <CardList people={filteredPeople} />}
      </main>
    </section>
  );
};

export default App;
