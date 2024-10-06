import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 info">
            <div className="content">
              <h2>Sevimli Pişiklər Üçün Yardım Edin</h2>
              <p className="pisikler">
                Şəhərimizin evsiz pişiklərinə yardım etməklə onların qayğıya və qidaya çıxışını təmin edin. Bizim qida aparatları sayəsində pişiklər daha asan və davamlı şəkildə qida əldə edəcək.
              </p>
              <Link to="/Contact">
              <div className="butt">
                <button className="Btn">
                  İndi Dəstək Ol
                </button>
              </div>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-4 col-md-5 foto">
            {/* You can add an image related to cats here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
