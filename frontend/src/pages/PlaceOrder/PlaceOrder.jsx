import React, { useContext } from 'react'
import './PlaceOrder.css'
import { storeContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(storeContext);
  return (
    <div>
      <form action="" className="place-order">
        <div className="placeorder-left">
          <p className="title">Delivery Information</p>
          <div className="multifields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email"  placeholder='Email address'/>
          <input type="text" placeholder='street'/>
          <div className="multifields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multifields">
            <input type="text" placeholder='Zipcode' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2  }</b>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
