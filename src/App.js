import logo from './logo.svg';
import './App.css';
import data from './Components/Data';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products, { ProductList, Shoe } from './Components/Products';

function App() {
  // const  data = data ;
  return (
    <Router>
      <div className='App-header'>
        <nav>
          <Link to="/"> Home </Link> <br/>
          <Link to="/products"> Products </Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}>
          <Route index element={<ProductList />} ></Route>
          <Route path=':slug' element={<Shoe />}> </Route>
        </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>

    </Router>
  );
}

export default App;

function NotFound() {
  return (
    <div>
      <h1> Path Not Found! </h1>
      <Link to={'/home'}> Back to Home</Link>
    </div>
  )
}
