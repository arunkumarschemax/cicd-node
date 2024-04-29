import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    try {
      const response = await axios.get('/names');
      console.log(response.data);
      setUsername(response.data);
    } catch (error) {
      console.error('Error fetching names:', error);
    }
  };

  return (
    <>
    <h1>My application hi</h1>
    <h3>{userName}</h3>
    
    </>
      
    
  );
}

export default App;
