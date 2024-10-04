import Wishlist from '../../Components/Wishlist/Wishlist'
import Cart from '../../Components/Cart/Cart'
import Data from './data2.json'
import React, {useState}from 'react'
import Card from "../../Components/Card/Card"
import ManageProducts from '../../Components/Dashboard/ManageProducts/ManageProducts'
import ProductManager from '../../Components/ProductManager/ProductManager'
function Shop() {
  const [products, setProducts] = useState(Data.products)
  return (
    <div>
        
        <ProductManager/>
    </div>
  )
}

export default Shop