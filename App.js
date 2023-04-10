import React from "react";
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [form, setForm] = useState({});



  const handleForm = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3004/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  const getUsers = async () => {
    const response = await fetch('http://localhost:3004/demo', {
      method: 'GET',

    })
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <span>username</span>
        <input type="text" name="username" onChange={(handleForm)}></input>
        <br></br>
        <span>password</span>
        <input type="text" name="password" onChange={(handleForm)}></input>
        <br></br>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default App;
