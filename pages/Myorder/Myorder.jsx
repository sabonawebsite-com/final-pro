import React, { useContext, useEffect, useState } from 'react'
 import './Myorder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'
const Myorder = () => {
    const {url,token}=useContext(StoreContext)
    const [data,setData]=useState([])
    const fechorder=async()=>{
    const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}})
    setData(response.data.data)

    }
    useEffect(()=>{
if (token) {
    fechorder()
}
    },[token])
  return (
    <div className='Myorder'>
   <h1>My orders</h1>
   <div className="order-continers">
    {data.map((order,index)=>{
return(
    <div key={index} className='myorders-order'>
<img src={assets.parcel_icon} alt="" />
<p>{order.items.map((item,index)=>{
    if (index===order.items.length-1) {
        return item.name +"X"+item.quantity;
    }
    else{
        return item.name +"X"+item.quantity+", "
    }
})}</p>

<p>{order.amount}.00</p>
<p> items:{order.items.length}</p>
<p>{order.status}</p>
<button onClick={fechorder}>Track Order</button>
    </div>
)
    }
    )}
   </div>
    </div>
  )
}

export default Myorder
