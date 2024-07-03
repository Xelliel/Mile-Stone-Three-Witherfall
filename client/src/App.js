import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State variables for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State variables for registration
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email: loginEmail, password: loginPassword });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', { email: registerEmail, password: registerPassword });
      console.log(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Witherfall</h1>
        <p>A place where nightmares come alive and dreams turn to blackest midnight.</p>
      </header>
      
      <div className="banner">
        <h2>Where will your travels take you?</h2>
      </div>

      <div className="login-container">
        <div className="login-box">
          <h2>Welcome home. Login</h2>
          <form onSubmit={handleLogin}>
            <div className="textbox">
              <input
                type="text"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="textbox">
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>

        <div className="login-box">
          <h2>New User? Register Here.</h2>
          <form onSubmit={handleRegister}>
            <div className="textbox">
              <input
                type="text"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div className="textbox">
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
        </div>
      </div>

      <div className="book-covers">
        <h2>Featured Books by Timothy Bates</h2>
        <div className="book-cover">
          <img src="https://media.istockphoto.com/id/157281215/photo/alchemy.jpg?s=2048x2048&w=is&k=20&c=-0_q_C_urOcZkHgf45GuDD9tgpnNeW0katZoS7rMQ-Q=" alt="Book Cover 1" />
          <p>The Grey Sleep  :    
            James Dawson is a man haunted by his dreams and hunted by a war unknown. A shadow marks his path. how long can an already fragile sanity hold?</p>
        </div>
        <div className="book-cover">
          <img src="https://images.pexels.com/photos/8360516/pexels-photo-8360516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book Cover 2" />
          <p>A Red Awakening:    The anomaly in Kitefall has left the land in ruins, with a world crumbling apart, how far will James travel to find truth at the Heart of The Great Awakening?</p>
        </div>
        <div className="book-cover">
          <img src="https://images.pexels.com/photos/5407935/pexels-photo-5407935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book Cover 3" />
          <p>The Witch of Witherfield: Betrayed and left to the coldest sleep, Wyvern is a man abandoned by friends and gods alike. He makes his journey home with only a flame of burning revenge to kindle his frozen heart</p>
        </div>
      </div>
    </div>
  );
}

export default App;
