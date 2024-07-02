import React, { useState } from 'react';
import './App.css';
import { hashPassword, comparePassword } from './auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const hashed = await hashPassword(password);
    setHashedPassword(hashed);
    // Add your registration logic here
    console.log('Email:', email);
    console.log('Hashed Password:', hashed);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const isMatch = await comparePassword(password, hashedPassword);
    if (isMatch) {
      console.log('Login successful');
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Witherfall</h1>
        <p>Below is a place where nightmares come alive and dreams turn to the blackest midnight.</p>
      </header>

      <div className="banner">
        <h2>Newsletter</h2>
      </div>

      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      </div>

      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>

      <div className="book-covers">
        <h2>Featured Books</h2>
        <div className="book-cover">
          <img src="/book-cover1.jpg" alt="Book Cover 1" />
          <p>Book Title 1</p>
        </div>
        <div className="book-cover">
          <img src="/book-cover2.jpg" alt="Book Cover 2" />
          <p>Book Title 2</p>
        </div>
        <div className="book-cover">
          <img src="/book-cover3.jpg" alt="Book Cover 3" />
          <p>Book Title 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;
