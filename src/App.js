import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Item />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/billing' element={<Billing />} />
          {/* <Route path='/home' element={<ShopCatagory catagory="mens"/>}/>
=======
        <Navbar />
        <Routes>
          <Route path='/' element={<Item />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/billing' element={<Billing />} />
          {/* <Route path='/home' element={<ShopCatagory catagory="mens"/>}/>
>>>>>>> 5ea5dc78009bce09944cb02570ad4ddab142ece3
=======
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/billing' element={<Billing />} />
          {/* <Route path='/home' element={<ShopCatagory catagory="mens"/>}/>
>>>>>>> 1315f997aa5455e238cb0a8d3a9630b3e27efdee
        <Route path='/womens' element={<ShopCatagory catagory="womens"/>}/>
        <Route path='/kids' element={<ShopCatagory catagory="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  )
}

export default App;
