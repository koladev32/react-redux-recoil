import { useRecoilState } from 'recoil'
import { counterState } from './atoms/counter.atoms'

function App() {
 const [counter, setCounter] = useRecoilState(counterState)

 const increment = () => setCounter((oldValue) => ++oldValue)

 return (
  <div className='Container'>
   <h1> A simple counter made with Recoil!</h1>
   <h3>Counter</h3>
   <h3>{counter}</h3>
   <button onClick={increment}>Increase</button>
  </div>
 )
}

export default App
