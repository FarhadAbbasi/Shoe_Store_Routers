import './App.css';
// import data from './Components/Data';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products, { ProductList, Shoe } from './Components/Products';
import Admin, { Login } from './Components/Admin';
import AdminPanel from './Components/AdminPanel';
import { useState } from 'react';

function App() {

  const [isloggedin, setIsloggedin] = useState(null) ;

  return (
    <Router>
      <div className='App-header'>
        <img src='/Nike-logo.jpg'></img>
        <nav>
          <Link to="/"> Home </Link> <br />
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

        <Route path='/admin' element={<Admin />} >
          <Route index element={<Login onlogin={setIsloggedin} />} />
          <Route path=':panel' element={ <AdminPanel /> } />
          {/* <Route path=':panel' element={ isloggedin ? <AdminPanel /> : <Navigate to='/admin' replace />} /> */}
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
