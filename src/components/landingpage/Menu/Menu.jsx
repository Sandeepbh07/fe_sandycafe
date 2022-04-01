import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed'
import image1 from '../../../assets/addi-images/breakfast.jpg'
import image2 from '../../../assets/addi-images/italian.jpg'
import image3 from '../../../assets/addi-images/enchillidas.jpg'
import './Menu.css'
const Menu = () => {
  const renderMenu = () => {
    return (
      <section>
          <Typed className="typed-text" string={['Our Daily Specials','Burger Bonanza','Sumptous Salads','Southern Delicacies']} typeSpeed={40} loop backSpeed={60}/>
        <div className="container">
          <Link to="/catalog">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image1} alt="Cardimagecap"/>
                <div className="card-body text-muted">
                  <h5 className="card-title">English Breakfast</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image2} alt="Cardimagecap" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Italian Combo Meal</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image3} alt="Cardimagecap" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Mexican Combo Meal</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
  };
  return <>{renderMenu()}</>;
};

export default Menu;
