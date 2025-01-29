import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import{useNavigate} from 'react-router-dom'
const Cart = () => {
  const{cartItem,removeFromcart,LiveStock_list,getTotalCartAmount,url}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Title</p>
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {LiveStock_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return( <div>
              <div key={index} className="cart-items-title cart-items-item">
                <img src={url+"/image/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeFromcart(item._id)} className='crows'>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>CART TOTAL</h2>
          <div>
          <div className="cart-total-detail">
          <p>subTotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-detail">
        <p>delivery free</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-detail">
          <b>Total</b>
          <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
        </div>
        </div>
        <button onClick={()=>navigate("/order")} className='button11'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
        <div>
      <p>if you have promo CODE write here</p>
          <div className='cart-promo-code-input'>
<input type="text" placeholder='enter your promo code here' />
<button>sumbit</button>
        
       

      </div>

     
</div>
          </div>
        </div>
      </div>
   
  )
}

export default Cart