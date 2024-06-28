import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () =>{

  let store = useContext(CartContext)
  let arr = store.cartArr

  // let arr = []
  // console.log(props.cartArr)
  // let sum =0

  // props.cartArr.forEach((ele)=>{
  //   sum = sum + ele.price
  // })

//   const handledelete=(ele,i)=>{
// console.log(ele)
// console.log(i)
// let copyArr = [...props.cartArr]
// copyArr.splice(i,1)
// console.log(copyArr)
// props.setcartArr(copyArr)
//   }


//   const handleIncrement = (ans,index)=>{
//     console.log(ans)
//     let obj = {
//       ...ans,
//       quantity:ans.quantity + 1,
//       price:ans.price + (ans.price/ ans.quantity)
//     }
//     console.log(obj)
//     let copyArr = [...props.cartArr]
//     copyArr[index] = obj
//     props.setcartArr(copyArr)
//   }

const handleIncrement=(ele,index)=>{
  console.log(ele)
  let obj= {
    ...ele,
    quantity:ele.quantity+1,
    price:ele.price+(ele.price/ele.quantity)
  }
    let copyArr = [...store.cartArr]
    copyArr[index] = obj
    store.setcartArr(copyArr)
    
}



const handledelete=(ele,index)=>{
  console.log(ele)

  let filteredItem = store.cartArr.filter((obj)=>obj.id!==ele.id)
  console.log(filteredItem)

  store.setcartArr(filteredItem)
}
  return (
    <div>
<table className="table align-middle">
  <thead>
    <tr className='text-center'>
      <th scope="col">S.No</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {arr.map((ele,index)=>{
    return  <tr className='align-center text-center'>
    <th scope="row">{index+1}</th>
    <td><img style={{width:"100px",height:"100px"}} src={ele.thumbnail} alt="" /></td>
    <td>{ele.title}</td>
    <td>{Math.ceil(ele.price)}</td>
    <td><button onClick={()=>handleIncrement(ele,index)} className='btn btn-info'>+</button> {ele.quantity} <button className='btn btn-info'>-</button></td>
    <td><button onClick={()=>handledelete(ele,index)} className='btn btn-danger'>Delete</button></td>
  </tr>
   })}
 
  </tbody>
</table>
   <h3 className='text-center mt-4'>Total ={Math.ceil(10)}Rs </h3>
    </div>
  )
}

export default Cart
