import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Slideshow from '../UI/Slideshow/Slideshow'
import BrowseCard from '../UI/BrowseCard/BrowseCard'
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup'
import AppSpinner from '../UI/Spinner/AppSpinner'
import Notification from '../UI/Notification/Notification'

import { getDishList } from '../../api/dish'
import { getCategoryList } from '../../api/category'
import { getFilteredDishList } from '../../api/dish'
import { addDishToCart } from '../Cart/cartHandler'

const Catalog = () => {
  const [dishes,setDishes]=useState([])
  const [filteredDishes,setFilteredDishes]=useState([])
  const [categories,setCategories]=useState([])
  const [loading,setLoading]=useState(false)
  const [show,setShow]=useState(false)

  const closeHandler=()=>{
    setShow(false)
  }

const showNotification=()=>(
<>
  {show && <Notification show={show} text={'ADD_TO_CART'} close={closeHandler}/>}
</>
)

const init=async()=>{
  try{
    setLoading(true)
    const result=await getDishList()
    setDishes(result.data)
    //get all categories
    const categoryList=await getCategoryList()
    setCategories(categoryList.data)
    setLoading(false)
  }catch(error){
    if(error.response){
      setLoading(false)
      console.log(error.response.data.error);
    }
  }
}

const getFilteredDishes=async(categories)=>{
  const categoriesLength=categories.length;
try{
  setLoading(true)
  const result=categoriesLength>0?await getFilteredDishList(categories):await getDishList()
 categories.length>0? setDishes([]):setFilteredDishes([])
 categoriesLength>0?setFilteredDishes(result.data):setDishes(result.data)
 setLoading(false)
}catch(error){
  setLoading(false)
  if(error.response){
    console.log(error.response.data.error);
  }
}
}

useEffect(()=>{
  init()
},[])

const displayDishes=()=>{
  return (
    <>
      {dishes.length>0 && dishes.map((dish)=>{
        return (
          <div className="col-10 col-lg-3 col-md-4 mt-2">
            <BrowseCard dish={dish} key={dish._id} addToCart={addToCart}/>
          </div>
        )
      })}
    </>
  )
}

const displayFilteredDishes=()=>{
  return (
    <>
      {filteredDishes.length>0 && filteredDishes.map((dish)=>{
        return (
          <div className="col-10 col-lg-3 col-md-4 mt-2">
            <BrowseCard dish={dish} key={dish._id} addToCart={addToCart}/>
          </div>
        )
      })}
    </>
  )
}

const addToCart=(dish)=>{
  addDishToCart(dish)
  setShow(true)
}

  const renderCatalog=()=>{
   return <Layout title="Dishes Catalog">
     {showNotification()}
     {loading ? <AppSpinner/> : ( <section className='container mt-4'>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
              <Slideshow/>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-2 mt-2">
              <h4>Filter By Category</h4>
              <CheckboxGroup categories={categories} handleFiltering={getFilteredDishes}/>
            </div>
            <div className="col-lg-10 mt-2">
              <div className="row justify-content-center">
                  {displayDishes()}
                  {displayFilteredDishes()}
              </div>
            </div>
          </div>
        </div>
     </section>)}
    </Layout>
  }
  return (
    <>{renderCatalog()}</>
  )
}

export default Catalog