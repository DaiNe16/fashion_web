import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/CounterSlice'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Toaster } from 'react-hot-toast';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
        <Toaster />
      <Routes>
        <Route path="/">
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="products" element={<ProductScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
