import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [occupation, setOccupation] = useState([]);
  const [state, setState] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Initial GET request
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(res => res.json())
      .then(data => {
        setOccupation(data.occupations);
        setState(data.states);
      });
  }, []);

  const handleName = event => {
    setName(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleOccupation = event => {
    setSelectedOccupation(event.value)
  }

  const handleState = event => {
    setSelectedState(event.value)
  }

  const handleSubmit = () => {
    // Creating JSON object
    let payload = {
      "name": name,
      "email": email,
      "password": password,
      "occupation": selectedOccupation,
      "state": selectedState
    }
    fetch('https://frontend-take-home.fetchrewards.com/form', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => {
        console.log(`Status: ${res.status}`)
        // Checking status and updating state
        res.status === 201
          ? setSuccess("Successful Submission!")
          : setSuccess("Try Again!");
        return res.json()
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Frontend Take-Home Exercise</h2>

        <input placeholder="Name" onChange={handleName}></input>

        <input placeholder="Email" onChange={handleEmail}></input>

        <input placeholder="Password" onChange={handlePassword}></input>

        <Select
          placeholder="Occupation"
          defaultValue=""
          onChange={handleOccupation}
          name='occupation'
          options={occupation.map(data => ({ value: data, label: data }))}
          className="basic-multi-select"
          classNamePrefix="select"
          />

        <Select
          placeholder="State"
          defaultValue={state}
          onChange={handleState}
          name='state'
          options={state.map(data => ({ value: data.name, label: data.name }))}
          className="basic-multi-select"
          classNamePrefix="select"
          />

        {
          // Checking that all inputs are filled in
          name && email && password && selectedOccupation && selectedState
            ? <button onClick={handleSubmit} className="enabled">Submit</button>
            : <button disabled={true}>Submit</button>
        }
        {
          // Returns success upon status 201
          success
            ? <p>{success}</p>
            : ""
        }

      </header>
    </div>
  );
}

export default App;
