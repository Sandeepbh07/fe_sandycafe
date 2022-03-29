import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const renderFooter=() => (
       <footer className='footer'>
         <div className="container">
           <div className="row justify-content-center flex-wrap">
             <section className='col-12 col-md-4 footer-column'>
                <p>sandyCaf&egrave;-A Food Delivery Startup</p>
                <p>Copyright &copy; 2022</p>
             </section>
             <section className="col-12 col-md-4 footer-column">
               <ul>
                 <li><a href="/delivery">Delivery</a></li>
                 <li><a href="/returns">Returns</a></li>
                 <li><a href="/support">Support</a></li>
               </ul>
             </section>
             <section className="col-12 col-md-4 footer-column">
                <div>
                  <a href="/git">
                    <FontAwesomeIcon size='2x' icon={faGithub}/>
                  </a>
                
                  <a href="/facebook">
                    <FontAwesomeIcon size='2x' icon={faFacebook}/>
                  </a>
               
                  <a href="/twitter">
                    <FontAwesomeIcon size='2x' icon={faTwitter}/>
                  </a>
                
                  <a href="/linkedin">
                    <FontAwesomeIcon size='2x' icon={faLinkedin}/>
                  </a>
                </div>
              </section>
           </div>
         </div>
       </footer>
    )
  return (
    <>
     {renderFooter()} 
    </>
  )
}

export default Footer
