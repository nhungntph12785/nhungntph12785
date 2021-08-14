import React from 'react'
import logo from "../../img/logo.png";
// import "../../css/fontawesome.min.css";
// import "../../css/fontawesome.css";  
const Header = () => {
    // const { email } = jwt.decode(isAuthenticated())
    // console.log(email);
    return (
      <header className="header">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="header__logo">
          <a style={{textDecoration: 'none'}}  href="./index.html"><img src={logo} alt /></a>
        </div>
      </div>
      <div className="col-lg-6">
        <nav className="header__menu">
          <ul>
            <li className="active"><a style={{textDecoration: 'none'}}  href="./index.html">Home</a></li>
            <li><a style={{textDecoration: 'none'}}  href="./shop-grid.html">Shop</a></li>
            <li><a style={{textDecoration: 'none'}}  href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li><a style={{textDecoration: 'none'}}  href="./shop-details.html">Shop Details</a></li>
                <li><a style={{textDecoration: 'none'}}  href="./shoping-cart.html">Shoping Cart</a></li>
                <li><a style={{textDecoration: 'none'}}  href="./checkout.html">Check Out</a></li>
                <li><a style={{textDecoration: 'none'}}  href="./blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a style={{textDecoration: 'none'}}  href="./blog.html">Blog</a></li>
            <li><a style={{textDecoration: 'none'}}  href="./contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
    <div className="humberger__open">
      <i className="fa fa-bars" />
    </div>
  </div>
</header>

    )
}

export default Header
