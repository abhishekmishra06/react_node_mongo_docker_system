import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend React App</h1>
      <h2>Message from Backend:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
