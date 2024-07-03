import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
          <img src="https://media.istockphoto.com/id/157281215/photo/alchemy.jpg?s=2048x2048&w=is&k=20&c=-0_q_C_urOcZkHgf45GuDD9tgpnNeW0katZoS7rMQ-Q=" alt="Book Cover 1" />
          <p>Book Title 1</p>
        </div>
        <div className="book-cover">
          <img src="client\public\Witch of Witherfield Cover 2.webp" alt="Book Cover 2" />
          <p>Book Title 2</p>
        </div>
        <div className="book-cover">
          <img src="https://images.pexels.com/photos/5407935/pexels-photo-5407935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book Cover 3" />
          <p>Book Title 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;
