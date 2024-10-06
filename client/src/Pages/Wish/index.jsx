import React from 'react';
import "./index.scss";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Haqqımızda - Evsiz Pişiklərə Yardım</title>
      </Helmet>
      <div className="about-page">
        <section className="about-intro">
          <h1>Missiyamız Haqqında</h1>
          <p>Biz inanırıq ki, hər pişik qayğıya layiqdir, hətta onların evi olmasa belə. Bizim təşəbbüsümüz, şəhər ərazilərində evsiz pişiklərin qidaya çıxışını təmin edən qida aparatlarının qurulmasından ibarətdir. Bu aparatlarla ən çox ehtiyacı olan pişiklərə davamlı yemək təklif edirik.</p>
        </section>

        <section className="about-locations">
          <h2>Qida Aparatlarımızı Harada Tapa Bilərsiniz</h2>
          <p>Yaxın zamanda qida aparatlarımızın aşağıdakı məkanlarda mövcud olacağını elan etməkdən qürur duyuruq:</p>
          <ul>
            <li>Şəhər Mərkəzi Parkı</li>
            <li>Qız Qalası yaxınlığı</li>
            <li>Nizami küçəsi</li>
            <li>Dənizkənarı Bulvar</li>
          </ul>
        </section>

        <section className="about-extra">
          <h2>Maraqlı Məlumatlar</h2>
          <p>Bizim qida aparatlarımız xüsusi sensorlarla təchiz olunmuşdur, bu da pişiklər yaxınlaşanda qidanı avtomatik verir. Həmçinin, cihazlar günəş enerjisi ilə işləyir, bu da onları ekoloji cəhətdən davamlı edir.</p>
        </section>
      </div>
    </>
  );
}

export default About;
