import React, { useState } from 'react';
import './Home.css';

const WelcomePage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, email });
    setMessage('Thank you for registering!');
  };

  return (
    <div className="welcome-page">
      <header className="header">
        <h1>Welcome to the Horror Novel Newsletter</h1>
        <p>Stay updated with the latest horror novels and news</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
      </main>
    </div>
  );
};

export default WelcomePage;
