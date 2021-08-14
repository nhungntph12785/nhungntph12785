import React from 'react'
import logo from "../../img/logo.png";

const Footer = () => {
    return (
      <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="./index.html"><img src={logo} alt /></a>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul>
                <li><a style={{textDecoration: 'none'}} href="#">About Us</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">About Our Shop</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Secure Shopping</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Delivery infomation</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Privacy Policy</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Our Sitemap</a></li>
              </ul>
              <ul>
                <li><a style={{textDecoration: 'none'}} href="#">Who We Are</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Our Services</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Projects</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Contact</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Innovation</a></li>
                <li><a style={{textDecoration: 'none'}} href="#">Testimonials</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit" className="site-btn">Subscribe</button>
              </form>
              <div className="footer__widget__social">
                <a style={{textDecoration: 'none'}} href="#"><i className="fa fa-facebook" /></a>
                <a style={{textDecoration: 'none'}} href="#"><i className="fa fa-instagram" /></a>
                <a style={{textDecoration: 'none'}} href="#"><i className="fa fa-twitter" /></a>
               <div>
  <a style={{textDecoration: 'none'}} href="#"><i classname="fa fa-pinterest" /></a><i classname="fa fa-pinterest">
  </i></div>

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright ©
                  All rights reserved | This
                  template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
              <div className="footer__copyright__payment"><img src="img/payment-item.png" alt /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    


    )
}

export default Footer
