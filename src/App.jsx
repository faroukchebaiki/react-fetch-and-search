import { useEffect, useMemo, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

// REST endpoint that powers the sample user directory.
const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

// Root application component: fetches users, manages search state, and renders results.
const App = () => {
  // All fetched users, kept in memory for filtering.
  const [people, setPeople] = useState([]);
  // Text currently entered in the search box.
  const [searchTerm, setSearchTerm] = useState("");
  // High-level status for UI feedback (idle | loading | ready | error).
  const [status, setStatus] = useState("idle");
  // Human-readable error message shown when fetch fails.
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch user data exactly once on mount with abort support for unmounts.
  useEffect(() => {
    const controller = new AbortController();

    // Load users from the API and update status indicators.
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

    // Abort any inflight request if the component unmounts.
    return () => controller.abort();
  }, []);

  // Derived list filtered by the search term; memoized to avoid extra work on renders.
  const filteredPeople = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return people;
    }

    return people.filter((person) =>
      person.name.toLowerCase().includes(normalizedTerm)
    );
  }, [people, searchTerm]);

  // Keep searchTerm state in sync with the input element.
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
