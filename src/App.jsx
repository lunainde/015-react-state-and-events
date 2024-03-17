
import './App.css';
import Counter from './components/Counter';

// ADDING EVENT import
import {useState} from 'react';

function App() {
  // ADDING EVENT initial state
  const [theme, setTheme] = useState('light');

  //REFACTOR onChange outside return to toggle
  const toggleTheme = e => { setTheme(e.target.value) };

  return (
    // ADDING EVENT Class change!
    <div className={'App ' + theme}> 

    <h1>React - state and events</h1>
    <Counter />

    {/* DROPDOWN with an onChange event */}
    {/* <select onChange={ event => setTheme(event.target.value) } /> */}
    {/* <select onChange={ e => setTheme(e.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select> */}

      {/* REFACTOR onChange to TOGGLE */}
      <select onChange={ toggleTheme }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  )
}

export default App

