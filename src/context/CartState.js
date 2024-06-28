import React, { useState } from 'react'
import CartContext from './CartContext'
const CartState = (props) => {

    const [cartArr, setcartArr] = useState([]);
    const [searchValue, setsearchValue] = useState("");
    console.log(searchValue)
  return (
    <CartContext.Provider value={{cartArr,setcartArr,setsearchValue,searchValue}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState
