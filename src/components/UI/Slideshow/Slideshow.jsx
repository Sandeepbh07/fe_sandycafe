import React from 'react'
import {Carousel} from 'react-bootstrap'

import momo from '../../../assets/images/momo.jpg'
import cm from '../../../assets/images/backgrd.jpg'
import burger from '../../../assets/images/burger.jpg'
import './Slideshow.css'
const Slideshow = () => {

    const renderSlideshow=()=>{
        return(
               <Carousel className='slide carousel-fade'>
                   <Carousel.Item data-interval='2000'> 
                        <img 
                        className='d-block w-100'
                        src={momo} 
                        alt="First slide" 
                        style={{ width:'500px',height:'250px',borderRadius:'5px' }}
                        />
                         <Carousel.Caption>
                       <h3>Mitho Momo</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat quos cupiditate reprehenderit? Culpa pariatur error alias in, accusantium mollitia animi unde architecto. Dolores distinctio, officiis cum repellat optio magni.</p>
                   </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item data-interval='2000'> 
                        <img 
                        className='d-block w-100'
                        src={cm} 
                        alt="First slide" 
                        style={{ width:'500px',height:'250px',borderRadius:'5px' }}
                        />
                         <Carousel.Caption>
                       <h3>Mitho Chowmein</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat quos cupiditate reprehenderit? Culpa pariatur error alias in, accusantium mollitia animi unde architecto. Dolores distinctio, officiis cum repellat optio magni.</p>
                   </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item data-interval='2000'> 
                        <img 
                        className='d-block w-100'
                        src={burger} 
                        alt="First slide" 
                        style={{ width:'500px',height:'250px',borderRadius:'5px' }}
                        />
                         <Carousel.Caption>
                       <h3>Mitho Burger</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat quos cupiditate reprehenderit? Culpa pariatur error alias in, accusantium mollitia animi unde architecto. Dolores distinctio, officiis cum repellat optio magni.</p>
                   </Carousel.Caption>
                   </Carousel.Item>
               </Carousel> 
        )
    }
  return (
    <>
        {renderSlideshow()}
    </>
  )
}

export default Slideshow