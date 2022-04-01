import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import {getTotalItemsInCart,getCartTotal,getCart,updateDishQuantity,removeDishFromCart} from './cartHandler'
import MenuCard from '../UI/MenuCard/MenuCard'
import Notification from '../UI/Notification/Notification'
const Cart = () => {
  const [dishes,setDishes]=useState([])
  const [show,setShow]=useState(false)
  const [notificationText,setNotificationText]=useState('')
  const init=async()=>{
    try{
      const items=await getCart()
      setDishes(items)
    }catch(error){
      throw error
    }
  }

  useEffect(()=>{
    init()
  },[])

  const displayNotifications=()=>{
    show && <Notification show={show} text={notificationText} close={closeHandler}/>
  }

const updateCart=async(dish,action)=>{
  await updateDishQuantity(dish)
  setDishes(getCart())
  setNotificationText(action==='increment'?'ITEM_QTY_INCREASED':'ITEM_QTY_DECREASED')
  setShow(true)
}

const removeDish=async(dish)=>{
  await removeDishFromCart(dish._id,()=>{setDishes(getCart())})
  setNotificationText('REMOVED FROM CART')
  setShow(true)
}

const closeHandler=()=>{
  setShow(false)
}

const showCart=()=>(
  <>
    {dishes.map(dish=>(<div className="col-lg-4 col-md-5" key={dish._id}>
      <MenuCard dish={dish} updateCart={updateCart} removeDish={removeDish}/>
    </div>))}
  </>
)


    const renderCart=()=>{
        return(
            <Layout title={"Cart Summary"}>
               {displayNotifications()}
                  <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-12 col-lg-4">
                      <h4>Your cart contains {getTotalItemsInCart()} dishes</h4>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <button className="btn btn-primary">
                        Continue Shopping <strong>&#x27F9;</strong>
                        </button>
                    </div>
                  </div>
                  <div className="row justify-content-start mt-5">
                    <div className="col-lg-6 col-7">
                      <div className="row justify-content-start">
                        {showCart()}
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <h5 style={{ textDecoration:'underline' }}>Total: <i className='fa fa-inr'/>
                      <span style={{ padding:'0 5px' }}>
                      {getCartTotal().toFixed(2)}
                      </span>
                      </h5>
                      <Link to='/signin'>
                      <button className='btn btn-success'>
                        <i className='fa fa-lock'/>
                        <span style={{padding:'5px 10px'}}>Signin to Checkout</span>
                      </button>
                      </Link>
                    </div>
                  </div>
            </Layout>
        )
    }
  return (
    <>
    {renderCart()}
    </>
  )
}

export default Cart