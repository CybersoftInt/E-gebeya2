import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Footer from './Components/Footer/Footer';
import Billing from './Components/Billing/Billing';
import Wishlist from './Components/Wishlist/Wishlist';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';
import Error from './Components/Error/Error';
import Shop from './Pages/Shop/Shop';
import { useEffect } from 'react';
import AuthRedirect from './utils/AuthRedirect';
import ProtectedRoute from './utils/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AuthRedirect/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/billing' element={<ProtectedRoute><Billing /></ProtectedRoute>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item' element={<Item />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/error' element={<Error />} />
          <Route path='/admin' element={<ProtectedRoute  adminOnly="true"><Dashboard /></ProtectedRoute>} />

          <Route path="*" element={<Error />} />

          
        </Routes>
        <Footer />
        <ToastContainer /> 
      </BrowserRouter>

    </div>
  )
}

export default App;
