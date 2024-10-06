import React from 'react';
import "./index.scss";

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <h2>Bizimlə Əlaqə Saxlayın</h2>
        <p>Hər hansı bir sualınız varsa, bizimlə əlaqə saxlamağa çəkinməyin!</p>
        
        <div className="contact-info">
          <div className="info-item">
            <h3>Əlaqə Nömrəsi</h3>
            <p>(+994) 55 123 45 67</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@yourwebsite.com</p>
          </div>
          <div className="info-item">
            <h3>Ünvan</h3>
            <p>Bakı, Azərbaycan</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Adınız</label>
            <input type="text" id="name" placeholder="Adınızı daxil edin" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Emailinizi daxil edin" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" placeholder="Mesajınızı buraya yazın" required></textarea>
          </div>
          <button type="submit">Göndər</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
