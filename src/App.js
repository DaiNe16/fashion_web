import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/CounterSlice'
import { useGetPokemonByNameQuery } from './redux/services/pokemon'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
