import logo from './logo.svg';
import './App.css';
import data from './Components/Data';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products, { ProductList } from './Components/Products';

function App() {
  // const  data = data ;
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}>
          <Route index element={<ProductList />} ></Route>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
