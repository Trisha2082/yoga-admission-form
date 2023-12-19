// App.js
import React, { useState } from 'react';
import logo from './logo.jpg'; // Replace with the actual path
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [batch, setBatch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate data
    if (!name || !age || !batch) {
      alert("Please fill in all fields!");
      return;
    }

    setIsLoading(true);

    const data = {
      name,
      age,
      batch,
    };

    try {
      const response = await enrollYogaStudent(data);

      setIsLoading(false);

      if (response.success) {
        alert("Successfully enrolled! Please proceed to payment.");
      } else {
        alert("Error enrolling: " + response.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("An unexpected error occurred!");
    }
  };

  const enrollYogaStudent = async (data) => {
    const response = await fetch("http://localhost:5000/api/enroll", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Yoga Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                disabled={isLoading}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Batch:
              <select value={batch} onChange={(e) => setBatch(e.target.value)}>
                <option value="">Select Batch</option>
                <option value="6-7AM">6-7 AM</option>
                <option value="7-8AM">7-8 AM</option>
                <option value="8-9AM">8-9 AM</option>
                <option value="5-6PM">5-6 PM</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Enroll"}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
