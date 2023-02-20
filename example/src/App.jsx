import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment } from './actions/counterActions';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter';

function App() {
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <button onClick={ () => dispatch(increment(1)) }>Öka med 1</button>
      <ViewCounter />
    </div>
  )
}

export default App
