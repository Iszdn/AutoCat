import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="foot-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <p>Bizim missiyamız evsiz pişiklərə qida və qayğı təmin etməkdir. Gələcəyə doğru birlikdə addımlayaq!</p>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h3>Sürətli Keçidlər</h3>
              <ul>
                <li>
                  <Link to="/about">Haqqımızda</Link>
                </li>
                <li>
                  <Link to="/donate">İanə Et</Link>
                </li>
                <li>
                  <Link to="/volunteer">Könüllü Ol</Link>
                </li>
                <li>
                  <Link to="/contact">Əlaqə</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h3>Yeni Məhsullar</h3>
              <ul>
                <li>
                  <Link to="/food">Pişik Yeməkləri</Link>
                </li>
                <li>
                  <Link to="/products">Aparatlar</Link>
                </li>
                <li>
                  <Link to="/shop">Mağaza</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h3>Dəstək</h3>
              <ul>
                <li>
                  <Link to="/faq">Tez-tez Verilən Suallar</Link>
                </li>
                <li>
                  <Link to="/support">Yardım Mərkəzi</Link>
                </li>
                <li>
                  <Link to="/contact">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p>Copyright ©2024 Bütün hüquqlar qorunur | Bu layihə <i className="fa-solid fa-heart"></i> ilə yaradılmışdır <span>by Sizin Brendiniz</span></p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="sosials">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
