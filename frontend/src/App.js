import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Three Tier Application</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
