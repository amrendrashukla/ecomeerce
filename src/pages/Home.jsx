import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Faltu from './Faltu';
import CartContext from '../context/CartContext';

const Home = (props) => {
  // props --> with the help of props you can pass data from parent to child component

  const [currentPage, setcurrentPage] = useState(1);
  

  let store = useContext(CartContext)
  console.log(store)

  let searchValue = store.searchValue

    const [arr, setarr] = useState([]);

    let itemPerPage = 20;

    let lastIndex = itemPerPage *currentPage;  
    let firstindex = lastIndex- itemPerPage; 

    // console.log(arr)





    
    // console.log(lastIndex)
    // console.log(firstindex)
    let copyArr = [...arr]

    let slicedArr = arr.slice(firstindex,lastIndex)

    let filteredItem = slicedArr.filter((ele)=>ele.title.toLowerCase().includes(searchValue))
    console.log( filteredItem)
    // console.log(slicedArr)

    let noOFButton =Math.ceil( arr.length/itemPerPage)
    // console.log(noOFButton)

    let buttonaRR = [...Array(noOFButton+1).keys()].slice(1)
    // console.log(buttonaRR)





    async function fetchApi (){
        let res = await fetch('https://dummyjson.com/products?skip=0&limit=0')
        let data = await res.json()
        console.log("ytes")
        console.log(data.products)
        setarr(data.products)
    }

 useEffect(()=>{
    fetchApi()
 },[])

 const handleAddToCart = (ans)=>{
  console.log(ans)
  let obj = {
    ...ans,
    quantity:1
  }
  let find = store.cartArr.find((ele)=>ele.id===ans.id)
  
  if(!find){
    store.setcartArr([...store.cartArr,obj])

   

  }
 


 }

  return (
    <div className='row d-flex justify-content-center gap-2'>
      {/* <Faltu/> */}



{filteredItem.map((ele,index)=>{
    return <div key={index} className="card" style={{width: '18rem'}}>
  <img src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
   
    <Link to="/single" state={ele} className="btn btn-primary">View Detail</Link>
    <button onClick={()=>handleAddToCart(ele)} className='btn btn-success ms-2'>Add to cart</button>
  </div>
</div>

})}

<nav style={{width:"maxContent"}} aria-label="Page navigation example my-4 ">
  <ul className="pagination  d-flex justify-content-center" >
    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
 {buttonaRR.map((ele,index)=>{
  return    <li key={ele} onClick={()=>setcurrentPage(ele)} className={currentPage===ele?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li>
 })}
  
    <li onClick={()=>setcurrentPage(currentPage+1)} className="page-item"><Link className="page-link" to="#">Next</Link></li>
  </ul>
</nav>
    </div>
  )
}

export default Home
