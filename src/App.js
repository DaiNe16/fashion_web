import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/CounterSlice'
import { useGetPokemonByNameQuery } from './redux/services/pokemon'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
