import React from 'react';
import "./index.scss";

const New = () => {
  return (
    <section id='new'>
      <div className="container">
        <h2>Yeni Qida Aparatları</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 neew">
            <div className="img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0va1NFv21q5BCbcvPaCFE188ccRJvYAA07w&s" alt="Cat food dispenser in park" />
            </div>
            <div className="content">
              <h3>Şəhər Mərkəzi Parkı</h3>
              <p>Qida Aparatı Burada Mövcuddur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 neew">
            <div className="img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg/300px-Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg" alt="Cat food dispenser near historical site" />
            </div>
            <div className="content">
              <h3>Qız Qalası Yaxınlığı</h3>
              <p>Qida Aparatı Burada Mövcuddur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 neew">
            <div className="img">
              <img src="https://reyting.az/uploads/posts/2018-02/1519838964_bul.jpg" alt="Cat food dispenser in boulevard" />
            </div>
            <div className="content">
              <h3>Dənizkənarı Bulvar</h3>
              <p>Qida Aparatı Burada Mövcuddur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default New;
