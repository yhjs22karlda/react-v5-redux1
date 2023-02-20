import './App.css'
import { increment } from './actions/counterActions';
import { decrement } from './actions/counterActions';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter';

function App() {
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <button onClick={ () => dispatch(increment(1)) }>Öka med 1</button>
      <ViewCounter />
      <button onClick={ () => dispatch(decrement(1)) }>Minska med 1</button>
    </div>
  )
}

export default App
