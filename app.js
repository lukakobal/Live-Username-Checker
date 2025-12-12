import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");

  const isTooShort = username.length < 3;
  return (
    <div className="container">
      <h1>Username Checker</h1>

      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {isTooShort && (
        <p className="error">Username must be at least 3 characters.</p>
      )}

      {username.length >= 3 && <p className="succes">Looks good!</p>}
    </div>
  );
}
