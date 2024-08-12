import Wishlist from '../../Components/Wishlist/Wishlist'
import Cart from '../../Components/Cart/Cart'
import Data from './data2.json'
import React, {useState}from 'react'
import Card from "../../Components/Card/Card"
function Shop() {
  const [products, setProducts] = useState(Data.products)
  return (
    <div>
        {/* {
          products.map(p =>{
            <Card product = {p}/>
          })
        } */}
    </div>
  )
}

export default Shop