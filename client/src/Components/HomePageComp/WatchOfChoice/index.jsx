import React from 'react';
import "./index.scss";

const WatchOf = () => {
  return (
    <section id='choice'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 info">
            <div className="content">
              <h3>Köhnə Dostların Qayğısı</h3>
              <p>Bizim qida aparatlarımızdan istifadə edərək evsiz pişiklərin gündəlik qida ehtiyaclarını qarşılamağa kömək edə bilərsiniz. Seçim sizin əlinizdədir!</p>
              <div className="butt">
                <button className="Btn">
                Bütün yeməkləri gör
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-12">
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="img">
              <img src="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425480007-getty-images-1498838344.jpg?crop=1060,1413,x530,y0" alt="Pişik qidası" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12">
            <div className="img">
              <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="Pişik qidası" />
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-12">
          </div>
          <div className="col-lg-6 col-md-6 col-12 info">
            <div className="content">
              <h3>Sevimli Pişiklərə Kömək Edin</h3>
              <p>Evsiz pişiklərə kömək etməyin sadə və asan yollarını öyrənin. Onlar sizi hər gün gözləyir!</p>
              <div className="butt">
                <button className="Btn">
                Yardım edin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchOf;
