import React, { useEffect, useState } from 'react'
import banner from "../../img/hero/banner.jpg";
import { getAllCate } from '../../api/categoryAPI';
import { Link, useParams } from 'react-router-dom';
import { getAllCateId } from '../../api/productAPI';


const ProCate = (props) => {
    const {categoryId}=useParams();
    console.log(categoryId);
    const [products, setProducts] = useState([]);
  useEffect(() => {
    // Danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAllCateId(categoryId);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categoryId]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
        //console.log(data);

      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  return (

    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars" />
                <span>All departments</span>
              </div>
              <ul>
                {categories.map((item) => (
                  <li><Link to={`/pro_cate/${item.id}`}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down" />
                  </div>
                  <input type="text" placeholder="What do yo u need?" />
                  <button type="submit" className="site-btn">SEARCH</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>

            <div className="hero__item set-bg" data-setbg={banner}>
             
              <div className="hero__text">
                <span>FRUIT FRESH</span>
                <h2>Vegetable <br />100% Organic</h2>
                <p>Free Pickup and Delivery Available</p>
                <a style={{ textDecoration: 'none' }} href="#" className="primary-btn">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row featured__filter">
        {products.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item" >
              <div className="featured__item__pic set-bg" >
                <img src={item.image}>
                </img>
                <ul className="featured__item__pic__hover">
                  <li><a style={{ textDecoration: 'none' }} href="#"><i className="fa fa-heart" /></a></li>
                  <li><a style={{ textDecoration: 'none' }} href="#"><i className="fa fa-retweet" /></a></li>
                  <li><a style={{ textDecoration: 'none' }} href="#"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6><a style={{ textDecoration: 'none' }} href="#">{item.name}</a></h6>
                <h5>{item.price} VND</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ProCate
