import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CartContext from '../context/CartContext'

const SingleProduct = () => {
  let store= useContext(CartContext)
  let cartArr= store.cartArr

    let location = useLocation()

    console.log(location.state)

    const handleSubmit = ( )=>{
      let obj = {
        ...location.state,
        quantity:1,
      }

      let find = cartArr.find((ele)=>ele.id === location.state.id)
      if(!find){
        store.setcartArr([...store.cartArr,obj])

      }
    }
    // const handleSubmit=()=>{

    // }

  return (
    <div style={{height:"90vh"}} className='d-flex flex-column justify-content-center gap-4'>
        <h1 className='text-center mt-4'> Product Detail</h1>
        <div  className="row ">
            <div className="col-md-6  d-flex justify-content-center">
                <img src={location.state.thumbnail} alt="" />
            </div>
            <div className="col-md-6 pt-4">
            <h3 className='mb-4'>Title:{location.state.title}</h3>
            <h3 className='mb-4'>Brand:{location.state.brand}</h3>
            <h3 className='mb-4'>Price:{location.state.price}</h3>
            <h3 className='mb-4'>Brand:{location.state.brand}</h3>
            <h5 className='mb-4'>{location.state.description}</h5>
            <h5 className='mb-4'>Rating:{location.state.rating}</h5>
            <button onClick={handleSubmit} className='btn btn-success'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct
